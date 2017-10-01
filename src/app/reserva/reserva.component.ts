import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmService, AcceptService, RoomService, AerolineaService,
          PassengerService, ReserveService, PaisService, AdicionalService,
          AuthenticationService, MessageService, FormaPagoService,
          PagoService } from '../_services/index';
import { Habitacion, CurrentMonth, dayReserve, Aerolinea } from '../_models/index';
import { Select2OptionData } from 'ng2-select2';

declare var jQuery:any;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

	rooms: Habitacion[] =[];
	user: any = {};
	current: CurrentMonth;

  reservados: any[] =[];
  reservadosDb: any[] =[];
  reservadosDbOd: any[] =[];

  formaPagos: any[] =[];

  habitacionesOd: any[] =[];

  aerolineas: Aerolinea[] =[];

  model: any = {};

  noReserve: number= 0;

  noPass:boolean = false;
  loading:boolean = false;

  accion:string = "I";
  esModi: boolean = true;

  contEdita: number = 0;

  jQuery:any;


  adicionales: Array<Select2OptionData>;
  optionsAdi: Select2Options;
  valueAd: string[];

  _adicionales: any[];

  paises: Array<Select2OptionData>;
  valuePa: string;

  subscription: any;

  modiVal: boolean = false;
  auxValor: any = {idHabitacion: 0, habitacion: '', tarifa: 0,
                    feDesde: new Date(), feHasta: new Date()};
  auxValor0: any ={};

  toDay: Date;

  pagos: any[] = [];

  goPass = false;

  constructor(private authService: AuthenticationService,
                private router: Router,
                private roomService: RoomService,
                private confirmService: ConfirmService,
                private acceptService: AcceptService,
                private aerolineaService: AerolineaService,
                private passengerService: PassengerService,
                private reserveService: ReserveService,
                private paisService: PaisService,
                private adicionalService: AdicionalService,
                private messService: MessageService,
                private formaService: FormaPagoService,
                private pagoService: PagoService) {

  }

  ngOnInit() {

    this.isLogged();

    var now = new Date();

    var dia = now.getDate();
    var mes = now.getMonth();
    var anio = now.getFullYear();

    this.toDay = new Date(anio, mes, dia, 0, 0, 0, 0);

    this.model.pass = {};
    this.model.notas = "";
    this.model.ident = true;
    this.current = new CurrentMonth();

    this.model.pago = {};

    this.model.totalPagado = 0;
    this.model.saldo = 0;

    this.loadAllRooms();
    this.loadAllAirlines();
    this.loadAllFormaPagos();
    this.setSelect2Paises();
    this.setSelect2Adicionales();
    this.getByDate();

    this.subscription = this.acceptService.getAcceptChangeEmitter()
      .subscribe(resp => this.selectedVal(resp));
  }

  selectedVal(resp) {

    if(resp == "aceptar"){

      if(this.accion == 'D')
        jQuery("#detalleEstadosModal").modal("show");
        else
          if(this.accion == 'DP')
            this.deletePago();
    }
    else{

      if(resp.modo == 'Ci' || resp.modo == 'Co'){

        this.model.estadoDetalle = resp.model.observacion;
        this.check(resp.modo);
      }
      else
        if(resp.modo == 'Ca'){

          this.model.estadoDetalle = resp.model.observacion;
          this.delete();
        }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  next() {

  	this.current.nextMonth();
    this.getByDate();
  }

  previous() {

  	this.current.previousMonth();
    this.getByDate();
  }

  lockIdent(){

    this.model.ident = !this.model.ident;

    if(!this.model.ident){
      this.noPass = true;
      this.model.pass.identificacion = "";
    }
    else{
      this.noPass = false;
    }
  }

  getPasse(){

    //this.loading = true;
    this.goPass = true;

    var ident = this.model.pass.identificacion;

    this.passengerService.getById(ident).subscribe(passenger => {

      if(passenger.success){

        if(passenger.data.length == 0){

          this.noPass = true;
          this.model.pass = {};
          this.defaultPa();
          this.model.pass.identificacion = ident;
          this.model.notas = "";
          this.model.pass.ident = true;
        }
         else
           if(passenger.data.length > 0){

              this.noPass = false;
              this.model.pass = passenger.data[0];
              this.model.pass.valuePa = this.model.pass.idPais;
              this.model.pass.ident = true;
            }
      }
      else{

      }

      this.goPass = false;
    });

  }

  guardar(form: NgForm){

    this.loading = true;

    this.model.accion = this.accion;

    var mensaje = "";
    var mensaje_err = "";

    switch (this.accion){
      case 'I':
        mensaje = 'Reserva creada con éxito';
        mensaje_err = 'Ocurrió un error al crear la reserva';
      break;
      case 'U':
        mensaje = 'Reserva modificada con éxito';
        mensaje_err = 'Ocurrió un error al modificar la reserva';
      break;
    }

    if(this.model.esProforma)
      this.model.estado = "Pr";
    else
      this.model.estado = "Re";

    this.reserveService.mantenimiento(this.model)
        .subscribe(
            data => {

                if(data.success){

                  this.loading = false;
                  this.loadAllRooms();
                  form.resetForm();
                  this.getByDate();
                  this.quitRes();

                  this.messService.success(mensaje);
                  this.showMess();
                }
                else{

                  this.loading = false;
                  this.messService.error(data.mensaje);
                  this.showMess();
                }
            },
            error => {

                console.log(error);
                this.loading = false;

                this.messService.error(mensaje_err);
                this.showMess();
            });
  }

  guardarPago(form: NgForm){

      this.loading = true;

      //this.model.pago.accion = this.accion;
      this.model.pago.idReserva = this.model.idReserva;

      var mensaje = "";
      var mensaje_err = "";

      switch (this.accion){
        case 'I':
          mensaje = 'Pago generado con éxito';
          mensaje_err = 'Ocurrió un error al generar el pago';
        break;
        case 'U':
          mensaje = 'Pago modificado con éxito';
          mensaje_err = 'Ocurrió un error al modificar el pago';
        break;
      }

      this.pagoService.mantenimiento(this.model.pago)
          .subscribe(
              data => {

                  if(data.success){

                    this.loading = false;
                    //form.resetForm();
                    this.getPagos();

                    this.messService.success(mensaje);
                    this.showMessPago();
                  }
                  else{

                    this.loading = false;
                    this.messService.error(data.mensaje);
                    this.showMessPago();
                  }
              },
              error => {

                  console.log(error);
                  this.loading = false;

                  this.messService.error(mensaje_err);
                  this.showMessPago();
              });
    }

  delete(){

    this.loading = true;

    this.model.accion = 'D';

    var mensaje = 'Reserva cancelada con éxito';
    var mensaje_err = 'Ocurrió un error al cancelar la reserva';

    this.reserveService.mantenimiento(this.model)
        .subscribe(
            data => {

                if(data.success){

                  this.loading = false;
                  this.loadAllRooms();
                  this.getByDate();
                  this.quitRes();

                  jQuery("#detalleEstadosModal").modal("hide");

                  this.messService.success(mensaje);
                  this.showMess();
                }
                else{

                  this.loading = false;

                  jQuery("#detalleEstadosModal").modal("hide");

                  this.messService.error(data.mensaje);
                  this.showMess();
                }
            },
            error => {

                console.log(error);
                this.loading = false;

                jQuery("#detalleEstadosModal").modal("hide");

                this.messService.error(mensaje_err);
                this.showMess();
            });
  }

deletePago(){

  this.loading = true;

  this.model.pago.accion = 'D';
  this.model.pago.idReserva = this.model.idReserva;

  var mensaje = 'Pago eliminado con éxito';
  var mensaje_err = 'Ocurrió un error al eliminar el pago';

  this.pagoService.mantenimiento(this.model.pago)
      .subscribe(
          data => {

              if(data.success){

                this.loading = false;
                this.getPagos();

                this.messService.success(mensaje);
                this.showMessPago();
              }
              else{

                this.loading = false;

                this.messService.error(data.mensaje);
                this.showMessPago();
              }
          },
          error => {

              console.log(error);
              this.loading = false;

              this.messService.error(mensaje_err);
              this.showMessPago();
          });
}

  check(check: string){

    this.loading = true;

    this.model.accion = 'Es';

    var mensaje = "";
    var mensaje_err = "";

    switch (check){
      case 'Ci':
        mensaje = 'Check-in éxitoso';
        mensaje_err = 'Ocurrió un error en el check in';
      break;
      case 'Co':
        mensaje = 'Check-out éxitoso';
        mensaje_err = 'Ocurrió un error en el check-out';
      break;
      case 'Re':
        mensaje = 'Reserva confirmada con exito';
        mensaje_err = 'Ocurrió un error al confirmar la reserva';
      break;
      case 'Ca':
        mensaje = 'Reserva cancelada con exito';
        mensaje_err = 'Ocurrió un error al cancelar la reserva';
      break;
    }

    if(check == 'Co' && (this.model.total - this.model.totalPagado) > 0){

      jQuery("#detalleEstadosModal").modal("hide");

      this.messService.error('No se puede realizar el proceso de check-out debido a que hay un saldo pendiente');
      this.showMess();
      return;
    }

    this.model.estado = check;

    this.reserveService.mantenimiento(this.model)
        .subscribe(
            data => {

                if(data.success){

                  jQuery("#detalleEstadosModal").modal("hide");

                  this.loading = false;
                  this.loadAllRooms();
                  this.getByDate();
                  this.quitRes();

                  this.messService.success(mensaje);
                  this.showMess();
                }
                else{

                  jQuery("#detalleEstadosModal").modal("hide");

                  this.loading = false;

                  this.messService.error(data.mensaje);
                  this.showMess();
                }
            },
            error => {

                jQuery("#detalleEstadosModal").modal("hide");

                console.log(error);
                this.loading = false;

                this.messService.error(mensaje_err);
                this.showMess();
            });
  }

  clickDay(_room: Habitacion, dia: number){

    if(this.isReserved(_room, dia))
      this.getReserveDet(_room, dia);

    var indexDb = this.findByIdDb(this.reservadosDb, _room.idHabitacion, new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

    if(indexDb!=-1)
      if(new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) >= this.getDateString('/', this.reservadosDb[indexDb].feDesde)
          && new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) <= this.getDateString('/', this.reservadosDb[indexDb].feHasta))
          return;

    if(new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) < new Date(new Date().getTime()
                                                                                        - (1000 * 60 * 60 * 24)))
      return;

    if(_room.noClick == undefined)
      _room.noClick= 1;

    if(_room.noClick==1){

      this.marco(_room, new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

      _room.noClick++;

      return;
    }
    else
      if(_room.noClick == 2){

        this.marco(_room, new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

        _room.noClick=1;

        return;
      }

    this.noReserve = this.reservados.length;
  }

  marco(_room: Habitacion, dateIn: Date){

    var index = this.findById(this.reservados, _room.idHabitacion);

    if(_room.noClick==1){

      if(index==-1){

        this.reservados.push({
          idHabitacion: _room.idHabitacion,
          habitacion: _room.habitacion,
          tarifa: _room.tarifa,
          feDesde: dateIn,
          feHasta: dateIn
        });

      }
      else{
        this.reservados.splice(index, 1);

        this.reservados.push({
          idHabitacion: _room.idHabitacion,
          habitacion: _room.habitacion,
          tarifa: _room.tarifa,
          feDesde: dateIn,
          feHasta: dateIn
        });
      }
    }
    else
      if(_room.noClick==2){


        if(index!=-1){

        var obj = this.reservados[index];

        if(dateIn.getTime() == obj.feDesde.getTime() &&
            dateIn.getTime() == obj.feHasta.getTime()){

            this.reservados.splice(index, 1);
          }
          else{

              obj.feHasta = dateIn;

              this.reservados[index] = obj;
            }

        }

      }
  }

  findById(arreglo: any[], id: number){
    for(var i=0; i<arreglo.length; i++){
      if(arreglo[i].idHabitacion == id)
        return i;
    }

    return -1;
  }

  findById0(arreglo: any[], id: number){
    for(var i=0; i<arreglo.length; i++){
      if(arreglo[i].idAdicional == id)
        return i;
    }

    return -1;
  }

  findByIdDb(arreglo: any[], id: number, feIn: Date){
    for(var i=0; i<arreglo.length; i++){
      if(arreglo[i].idHabitacion == id &&
        (feIn >= this.getDateString('/', arreglo[i].feDesde)
          && feIn <= this.getDateString('/', arreglo[i].feHasta)))
        return i;
    }

    return -1;
  }

  delReserve(_room: Habitacion){

    setTimeout(() => {

      var index = this.findById(this.reservados, _room.idHabitacion);

      if(index!=-1)
        this.reservados.splice(index, 1);

      this.noReserve = this.reservados.length;

    }, 600);


  }

  isSelected(_room: Habitacion, dia: number){

    var index = this.findById(this.reservados, _room.idHabitacion);
    var indexDb = this.findByIdDb(this.reservadosDb, _room.idHabitacion, new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

    // if(indexDb != -1 && dia > 2)
    //   debugger;

    if(indexDb!=-1){

      if(new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) >= this.getDateString('/', this.reservadosDb[indexDb].feDesde)
          && new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) <= this.getDateString('/', this.reservadosDb[indexDb].feHasta)){

        if(this.reservadosDb[indexDb].estado == 'Re')
          return { '_reserved': true};
        else
          if(this.reservadosDb[indexDb].estado == 'Ci')
            return { '_occupied': true};
          else
            if(this.reservadosDb[indexDb].estado == 'Co')
              return { '_checked-out': true};
            else
              if(this.reservadosDb[indexDb].estado == 'Pr')
                return { '_proform': true};
      }
    }

    if(new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) < new Date(new Date().getTime()
                                                                                        - (1000 * 60 * 60 * 24)))
      return {'_blocked': true};

    if(index!=-1){

      if(new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) >= this.reservados[index].feDesde
          && new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) <= this.reservados[index].feHasta)
        return { '_selected': true};
    }

    return {'_nah': true};

    // if(index!=-1){

    //   if(new Date(anio, mes, dia, 0, 0, 0, 0) >= this.reservados[index].feDesde
    //       && new Date(anio, mes, dia, 0, 0, 0, 0) <= this.reservados[index].feHasta)
    //     return {'day': true, '_selected': true};

    //   if(indexDb!=-1){

    //     if(new Date(anio, mes, dia, 0, 0, 0, 0) >= this.getDateString('/', this.reservadosDb[indexDb].feDesde)
    //         && new Date(anio, mes, dia, 0, 0, 0, 0) <= this.getDateString('/', this.reservadosDb[indexDb].feHasta))
    //       return {'day': true, '_reserved': true};
    //   }
    // }
    // else{

    //   if(indexDb!=-1){

    //     if(new Date(anio, mes, dia, 0, 0, 0, 0) >= this.getDateString('/', this.reservadosDb[indexDb].feDesde)
    //         && new Date(anio, mes, dia, 0, 0, 0, 0) <= this.getDateString('/', this.reservadosDb[indexDb].feHasta))
    //       return {'day': true, '_reserved': true};
    //   }
    // }


  }

  setReserva(){

    this.setDay2();
    this.model.habitaciones = this.reservados;
    this.accion = 'I';
    this.esModi = true;
    this.pagos = [];
  }

  setDay2(){

    for(var i=0; i<this.reservados.length; i++)
      if(this.reservados[i].feDesde == this.reservados[i].feHasta)
        this.reservados[i].feHasta
                                = new Date(this.reservados[i].feHasta.getTime()
                                                          + (1000 * 60 * 60 * 24));
  }

  // private getHabitacionesReserva(){
  //   let habitaciones = this.unique();
  //   let retorno: any = [];
  //   for(var i = 0; i<habitaciones.length; i++){

  //     let _retorno: any ={};
  //     _retorno._hab = this.getRoom(habitaciones[i]);
  //     _retorno._fechas = [];

  //     for(var j = 0; j<this.reservados.length; j++){
  //       if(this.reservados[j]._idRoom == habitaciones[i]){
  //         _retorno._fechas.push(this.reservados[j]._fecha);
  //       }
  //     }

  //     _retorno._fechas.sort((a, b)=>{
  //       if(a>b)
  //         return 1;
  //       else
  //         if(a<b)
  //           return -1;
  //     })

  //     retorno.push(_retorno);
  //   }

  //   return retorno;
  // }

  // private getRoom(_id: string){
  //   for(var i = 0; i<this.rooms.length; i++){
  //     if(this.rooms[i]._id == _id)
  //       return this.rooms[i];
  //   }
  // }

  // private getNoReservados(){

  //   for(var i = 0; i<this.reservados.length; i++){
  //     if(this.reservados[i]._idRoom == idRoom &&
  //         this.reservados[i]._anio == current.anio &&
  //           this.reservados[i]._mes == current.noMonth &&
  //             this.reservados[i]._dia == dia){

  //       return true;
  //     }

  //   }

  // }

  // private contains(_in: string){
  //   for(var i = 0; i<this.reservados.length; i++){
  //     if(this.reservados[i]._idRoom == _in) return true;
  //   }

  //   return false;
  // }

  // private unique(){
  //   let arr: any = [];
  //   for(var i = 0; i<this.rooms.length; i++){
  //       if(this.contains(this.rooms[i]._id)) {
  //           arr.push(this.rooms[i]._id);
  //       }
  //   }
  //   return arr;
  // }

  // private setSelect(idRoom: string, dia: number, mes: number, anio: number){

  //   let fecha = new Date(anio, mes, dia, 0, 0, 0, 0);

  //   if(this.reservados.length == 0){
  //     this.reservados.push({_idRoom: idRoom, _fecha: fecha });
  //     return;
  //   }

  //   for(var i = 0; i<this.reservados.length; i++){

  //     if(this.reservados[i]._idRoom == idRoom
  //         && this.reservados[i]._fecha.toString() == fecha.toString()){

  //       this.reservados.splice(i, 1);
  //       return;
  //     }

  //   }

  //   this.reservados.push({_idRoom: idRoom, _fecha: fecha})

  // }

// getMonth(mes: number, anio: number){
// 	this.currentMonth.
// }
getTotal(){

  if(!this.model.habitaciones || this.model.habitaciones.length==0)
    return 0;

  var habitaciones = this.model.habitaciones;
  var adicionales = this.model.valueAd || [];

  var sum = 0;
  for(var i=0; i<habitaciones.length; i++){

    sum = sum + (this.nightDiff(habitaciones[i].feDesde, habitaciones[i].feHasta) * habitaciones[i].tarifa);
  }

  for(var i=0; i<adicionales.length; i++){

    sum = sum + (adicionales[i].tarifa * adicionales[i].cantidad);
  }

  // var sumPagado = 0;
  // //TOTAL PAGADO
  // for(var i=0; i<this.pagos.length; i++){
  //
  //   sumPagado = sumPagado + this.pagos[i].monto;
  // }

  this.model.total = sum;
  // this.model.totalPagado = sumPagado;
  // this.model.saldo = sum - sumPagado;

  return this.model.total;
}

modiTarifa(room: any){

  this.auxValor = Object.assign({}, room);
  this.modiVal = true;
}

modiTarifa0(adi: any){

  this.auxValor0 = Object.assign({}, adi);
  //this.modiVal = true;
}

goModiVal(){

  this.auxValor = {idHabitacion: 0, habitacion: '', tarifa: 0,
                    feDesde: new Date(), feHasta: new Date()};
  this.modiVal = false;
}

goModiVal0(){

  this.auxValor0 = {idAdicional: 0, adicional: '', tarifa: 0, cantidad: 0};
  //this.modiVal = false;
}

cancelTarifa(room: any){

  var index = this.findById(this.model.habitaciones, room.idHabitacion);

  this.model.habitaciones[index] = Object.assign({}, this.auxValor);
  this.auxValor = {idHabitacion: 0, habitacion: '', tarifa: 0,
                    feDesde: new Date(), feHasta: new Date()};
  this.modiVal = false;
}

cancelTarifa0(adi: any){

  var index = this.findById0(this.model.valueAd, adi.idAdicional);

  this.model.valueAd[index] = Object.assign({}, this.auxValor0);
  this.auxValor0 = {idAdicional: 0, adicional: '', tarifa: 0, cantidad: 0};
  // this.modiVal = false;
}

private nightDiff(feDesde: Date, feHasta: Date) {

  return this.reserveService.getNights(feDesde, feHasta);
}


changedPa(e: any): void {

    this.model.pass.valuePa = e.value;
  }

changedAd(e: any): void {

  this.model.valueAd = [];//e.value;

  // tarifa de bd cuando se edita

  for(var i = 0; i<e.value.length; i++){

    var index = this.findById0(this._adicionales, e.value[i]);
    this._adicionales[index].cantidad = 1;
    this.model.valueAd.push(this._adicionales[index]);
  }

  // for(var i=0; i < this.model.valueAd.length; i++)
  //   for(var j=0; j < this._adicionales.length; j++ )
  //     if(this.model.valueAd[i].id == this._adicionales[j].idAdicional){
  //
  //       this.model.valueAd[i].tarifa = this._adicionales[j].tarifa;
  //       this.model.valueAd[i].cantidad = 1;
  //     }

}

setAds(arreglo: any[]): void {

  this.valueAd = [];
  for(var i=0; i<arreglo.length; i++)
    this.valueAd.push(''+arreglo[i].idAdicional);
}

setPa(idPais: any): void {

  this.valuePa = '' + idPais;
}

getWeekDay(dia: number){

  var now = new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0);
  return this.current.dias[now.getDay()];
}

// getIco(_room: Habitacion, current: CurrentMonth, dia: number){

//   var indexDb = this.findById(this.reservadosDb, _room.idHabitacion);

//   if(indexDb!=-1){

//     if(new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) >= this.getDateString('/', this.reservadosDb[indexDb].feDesde)
//         && new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) <= this.getDateString('/', this.reservadosDb[indexDb].feHasta)){

//       if(!this.reservadosDb[indexDb].occupied)
//         return {'fa-male': true };
//       else
//         if(this.reservadosDb[indexDb].occupied)
//           return {'fa-bed': true };
//     }

//     return {};
//   }

//   return {};
// }
setModi(){

  this.esModi = true;

  if(this.contEdita == 0){
    this.reservadosDbOd = Object.assign([], this.reservadosDb);
    this.habitacionesOd = Object.assign([], this.model.habitaciones);
  }

  this.contEdita ++;

  var cont = 0;

  while(this.model.habitaciones.length != cont){

    for(var i=0; i<this.reservadosDb.length; i++)
      if(this.reservadosDb[i].idReserva == this.model.idReserva){
        this.reservadosDb.splice(i, 1);
        cont ++;
      }
  }
  this.reservados = this.model.habitaciones;


  // for(var i=0; i<this.model.habitaciones.length; i++){

  //   this.reservados.push(
  //                         {
  //                           idHabitacion: this.model.habitaciones[i].idHabitacion,
  //                           habitacion: this.model.habitaciones[i].habitacion,
  //                           feDesde: this.model.habitaciones[i].feDesde,
  //                           feHasta: this.model.habitaciones[i].feHasta
  //                           });
  // }

  jQuery("#reservaModal").modal("hide");
}

setNuevoPago(){

  //this.accion = 'I';
  this.model.pago = {};
  this.model.pago.accion = 'I';
}

goModi(){

  this.setDay2();
  this.model.habitaciones = this.reservados;
  jQuery("#reservaModal").modal("show");
}

quitModi(){

  this.reservadosDb = Object.assign([], this.reservadosDbOd);
  this.model.habitaciones = Object.assign([], this.habitacionesOd);
  this.reservados = [];
  this.esModi = false;
  this.contEdita = 0;
  jQuery("#reservaModal").modal("show");
}

quitRes(){

  if(this.contEdita > 0){

    this.reservadosDb = Object.assign([], this.reservadosDbOd);
    this.model.habitaciones = Object.assign([], this.habitacionesOd);
    this.model
  }

  this.noPass = false;
  this.model = {};
  this.model.pass = {};
  this.model.notas = "";
  this.model.ident = true;
  this.reservados = [];
  this.valueAd = [];

  this.accion = 'I';
  this.contEdita = 0;
}

setCancel(){

  this.accion = 'D';
  this.model.a_estado = 'Ca'
  this.confirmService.go('¿Está seguro de cancelar la reserva?');
}

// private setRes2Res(){
// }

getReserveDet(_room: Habitacion, dia: number){

  var indexDb = this.findByIdDb(this.reservadosDb, _room.idHabitacion,
                                  new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));
  this.esModi = false;

  this.noPass = false;
  this.model = {};
  this.model.pass = {};
  this.model.notas = "";
  this.model.ident = true;
  this.reservados = [];

  //this.model.pago = {};

  this.reserveService.getById(this.reservadosDb[indexDb].idReserva).subscribe(
    reservas => {

      if(reservas.success){

        this.model = reservas.data[0];
        //console.log(this.model.valueAd);
        this.setAds(this.model.valueAd);
        //this.model.valueAdDets = this.model.valueAd;
        //this.model.valueAd = this.valueAd;
        this.setPa(this.model.pass.idPais);
        this.model.habitaciones = this.setDateHab(this.model.habitaciones);

        // if(this.model.habitaciones[0].feDesde.getTime() >= this.toDay.getTime())
        //   this.accion = 'U';

        this.accion = 'U';

        this.model.pago = {};

        this.getPagos();

        jQuery("#reservaModal").modal("show");
      }
      else{

        console.log('Error>> getById>> ' + reservas.mensaje);
      }
    });
}

setElimPago(model: any){

  this.accion = 'DP';
  this.model.pago = Object.assign({}, model);
  this.confirmService.go('¿Desea eliminar el registro?');
}

getPagos(){

  this.pagoService.getAll(this.model.idReserva)
                          .subscribe(pagos =>
                            {
                              this.model.pago = {};
                              this.pagos = pagos;

                              let sum = 0;

                              for(var i=0; i<pagos.length; i++){

                                sum+=pagos[i].monto;
                              }

                              this.model.totalPagado = sum;
                            });
}

getToolTip(_room: Habitacion, dia: number){

  var indexDb = this.findByIdDb(this.reservadosDb, _room.idHabitacion, new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));
  var reserva = this.reservadosDb[indexDb];

  return reserva.pasajero;
}

isReserved(_room: Habitacion, dia: number){

  var indexDb = this.findByIdDb(this.reservadosDb, _room.idHabitacion, new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

  if(indexDb!=-1){

    if(new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) >= this.getDateString('/', this.reservadosDb[indexDb].feDesde)
        && new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0) <= this.getDateString('/', this.reservadosDb[indexDb].feHasta))
      return true;

    return false;
  }

  return false;
}

ocultaBtnModi(op: string){

  switch(op){

    case 'Ci':

      if(this.model.estado == 'Co')
        return false;

      if(this.model.estado == 'Ci')
        return false;

      if(this.model.habitaciones[0].feDesde.getTime()
          == this.toDay.getTime())
        return true;

      return false;
    case 'Co':

      // if(this.model.estado == 'Ci'
      //   && !(this.model.estado == 'Co'))
      //   return true;
      //
      // return false;
      if(this.model.estado == 'Ci')
        return true;

      return false;
    case 'D':

      if(this.model.estado == 'Ci')
        return false;

      if(this.model.estado == 'Co')
        return false;

      return true;
    case 'U':

      if(this.toDay.getTime() < this.model.habitaciones[0].feDesde.getTime())
        return true

      return false;
  }
}

getEstado(){

    return this.reserveService.getEstado(this.model);
}

private setDateHab(arreglo: any[]){

  for(var i=0; i<arreglo.length; i++){

    arreglo[i].feDesde = this.getDateString('/', arreglo[i].feDesde);
    arreglo[i].feHasta = this.getDateString('/', arreglo[i].feHasta);
  }

  return arreglo;
}

private defaultPa(){

  if(this.paises.length>0){

    this.valuePa = this.paises[0].id;
    this.model.pass.valuePa = this.valuePa;
  }
}

private loadAllRooms() {

  this.roomService.getAll().subscribe(rooms => { this.rooms = rooms; });
}

private loadAllAirlines() {

  this.aerolineaService.getAll().subscribe(aerolineas => { this.aerolineas = aerolineas; });
}

private loadAllFormaPagos() {

  this.formaService.getAll().subscribe(formas => { this.formaPagos = formas; });
}

private setSelect2Paises(){

  this.paisService.getAll().subscribe(
    paises =>
    {
      this.paises = new Array<Select2OptionData>();

      for(var i=0; i<paises.length; i++){
        this.paises.push({id: "" + paises[i].idPais, text: paises[i].pais});
      }

      this.defaultPa();
    });
}

private setSelect2Adicionales(){

  this.optionsAdi = { multiple: true };

  this.adicionalService.getAll().subscribe(
    adicionales =>
    {
      this.adicionales = new Array<Select2OptionData>();
      this._adicionales = adicionales;

      for(var i=0; i<adicionales.length; i++){
        this.adicionales.push({id: "" + adicionales[i].idAdicional, text: adicionales[i].adicional});
      }
    });
}

private getByDate() {

  var feDesde = '01' + '/' + (this.current.noMonth + 1) + '/' + this.current.anio;
  var feHasta = this.current.finMes + '/' + (this.current.noMonth + 1) + '/' + this.current.anio;

  this.reserveService.getByDate('C', feDesde, feHasta).subscribe(
    reservas => {

      if(reservas.success){

        this.reservadosDb = reservas.data;
      }
      else{

        console.log('Error>> getByDate>> ' + reservas.mensaje);
      }
    });
}

// cierraPagos(){
//
//   jQuery("#pagosModal").modal("hide");
//
//   setTimeout(() => {
//
//     jQuery("#reservaModal").modal("show");
//   }, 200);
//
// }

private getDateString(delimiter: string, date: string){

  var auxDate= date.split(delimiter);
  return new Date(Number(auxDate[2]), Number(auxDate[1]) - 1, Number(auxDate[0]), 0, 0, 0, 0);
}

private showMess(){

  jQuery("#reservaModal").modal("hide");

    setTimeout(() => {

      jQuery("#messModal").modal("show");
    }, 200);
}

private showMessPago(){

  jQuery("#pagoModal").modal("hide");

    setTimeout(() => {

      jQuery("#messModal").modal("show");
    }, 200);
}

private isLogged(){

    this.authService.isLogged().subscribe(
                                response =>
                                {

                                    if(!response.success)
                                        this.router.navigate(['/login']);
                                },
                                error => this.router.navigate(['/login']) );
}

}
