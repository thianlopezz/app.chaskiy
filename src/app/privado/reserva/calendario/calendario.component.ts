import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrentMonth } from '../../models/current-month';
import { HabitacionService } from '../../habitacion/habitacion.service';

import * as moment from 'moment';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit, OnChanges {
  @Input() accion = 'I';

  @Input() reservasBD: any = [];
  @Input() reservasCliente: any = [];

  @Output() reservar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<any>();

  @Output() modificar = new EventEmitter<any>();
  @Output() cancelarModificacion = new EventEmitter<any>();

  @Output() detalle = new EventEmitter<any>();
  @Output() anterior = new EventEmitter<any>();
  @Output() siguiente = new EventEmitter<any>();

  current: CurrentMonth;
  noReserve = 0;

  habitaciones = [];
  loadingHabitaciones;

  cuadritos;

  constructor(private habitacionService: HabitacionService) {
    this.current = new CurrentMonth();
  }

  ngOnInit() {
    this.loadAllRooms();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.estaSeleccionada();
  }

  // CUANDO SE DA CLICK EN LOS CUADRITOS
  clickCuadrito(_room, dia: number) {
    // VERIFICAMOS QUE LA HABITACION EN LA QUE SE DA CLICK
    // ESTA EN RESERVADOS, SI LO ESTA DEBEMOS MOSTRAR EL DETALLE
    if (this.estaReservada(_room, dia)) {
      this.detalle.next({
        _room,
        dia,
        current: this.current
      });

      return;
    }

    const clickCuadrito = moment({
      y: this.current.anio,
      M: this.current.noMonth,
      d: dia
    });

    // SI DOY CLICK EN UN CUADRO QUE ESTE ANTES DE LA FECHA DE HOY
    // REGRESO SIN HACER NADA
    if (clickCuadrito < moment().subtract(1, 'days')) {
      return;
    }

    // LOGICA PARA MARCAR Y DESMARCAR CUADRITOS
    if (_room.noClick === undefined) {
      _room.noClick = 1;
    }

    if (_room.noClick === 1) {
      this.marcar(_room, clickCuadrito);
      _room.noClick++;
      return;
    } else if (_room.noClick === 2) {
      this.marcar(_room, clickCuadrito);
      _room.noClick = 1;
      return;
    }

    // REGRESO EL NUMERO DE HABITACIONES SELECCIONADAS
    this.noReserve = this.reservasCliente.length;
  }

  marcar(_room, dateIn: moment.Moment) {
    const index = this.reservasCliente.findIndex(x => x.idHabitacion === _room.idHabitacion);

    if (_room.noClick === 1) {
      if (index === -1) {
        this.reservasCliente.push({
          idHabitacion: _room.idHabitacion,
          habitacion: _room.habitacion,
          tarifa: _room.tarifa,
          feDesde: dateIn.toDate(),
          feHasta: dateIn.toDate()
        });
      } else {
        this.reservasCliente.splice(index, 1);

        this.reservasCliente.push({
          idHabitacion: _room.idHabitacion,
          habitacion: _room.habitacion,
          tarifa: _room.tarifa,
          feDesde: dateIn.toDate(),
          feHasta: dateIn.toDate()
        });
      }
    } else if (_room.noClick === 2) {
      if (index !== -1) {
        const obj = this.reservasCliente[index];

        if (dateIn.isSame(moment(obj.feDesde)) && dateIn.isSame(moment(obj.feHasta))) {
          this.reservasCliente.splice(index, 1);
        } else if (dateIn.isBefore(moment(obj.feDesde))) {
          obj.feDesde = dateIn.toDate();
          obj.feHasta = dateIn.toDate();
          this.reservasCliente[index] = obj;
        } else {
          obj.feHasta = dateIn.toDate();
          this.reservasCliente[index] = obj;
        }
      }
    }

    this.estaSeleccionada();
  }

  getLim(_op: string, _room, dia: number) {
    const indexDb = this.findByIdDb(
      this.reservasBD,
      _room.idHabitacion,
      new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
    );

    if (indexDb !== -1) {
      if (
        new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0).getTime() ===
          this.getDateString('/', this.reservasBD[indexDb].feDesde).getTime() &&
        _op === 'I'
      ) {
        return true;
      }

      if (
        new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0).getTime() ===
          this.getDateString('/', this.reservasBD[indexDb].feHasta).getTime() &&
        _op === 'O'
      ) {
        return true;
      }
    }
  }

  // PARA ENVIAR EL ESTILO BLOQUEADO MARCADO RESERVADO CHECKEDIN CHECKEDOUT
  estaSeleccionada() {
    this.cuadritos = [new Array(this.habitaciones.length)];

    for (let i = 0; i < this.habitaciones.length; i++) {
      this.cuadritos[i] = new Array(this.current.days.length);
    }

    for (let i = 0; i < this.habitaciones.length; i++) {
      for (let j = 0; j < this.current.days.length; j++) {
        // AGARRO EL INDEX DE LA RESERVA ENTRE reservadosCliente
        const indexReservaCliente = this.reservasCliente.findIndex(
          x => x.idHabitacion === this.habitaciones[i].idHabitacion
        );

        // AGARRO LA FECHA DEL CUADRITO DONDE SE DIO CLICK
        const fechaCuadrito = moment({
          y: this.current.anio,
          M: this.current.noMonth,
          d: this.current.days[j].day + 1
        });

        // BUSCO SI LA HABITACION ESTA RESERVADA
        const indexReservasBD = this.reservasBD.findIndex(
          x =>
            x.idHabitacion === this.habitaciones[i].idHabitacion &&
            fechaCuadrito >= moment(x.feDesde, 'DD[/]MM[/]YYYY') &&
            fechaCuadrito <= moment(x.feHasta, 'DD[/]MM[/]YYYY')
        );

        if (this.estaReservada(this.habitaciones[i], this.current.days[j].day + 1)) {
          if (this.reservasBD[indexReservasBD].estado === 'Re') {
            this.cuadritos[i][j] = { ...this.reservasBD[indexReservasBD], className: '_reserved' };
          } else if (this.reservasBD[indexReservasBD].estado === 'Ci') {
            this.cuadritos[i][j] = {
              ...this.reservasBD[indexReservasBD],
              className: '_occupied'
            };
          } else if (this.reservasBD[indexReservasBD].estado === 'Co') {
            this.cuadritos[i][j] = {
              ...this.reservasBD[indexReservasBD],
              className: '_checked-out'
            };
          } else if (this.reservasBD[indexReservasBD].estado === 'Pr') {
            this.cuadritos[i][j] = {
              ...this.reservasBD[indexReservasBD],
              className: '_proform'
            };
          }

          // compruebo si es inicio
          if (moment(this.reservasBD[indexReservasBD].feDesde, 'DD[/]MM[/]YYYY').isSame(fechaCuadrito, 'date')) {
            this.cuadritos[i][j].className = this.cuadritos[i][j].className + ' cuadrito_ini';
            this.cuadritos[i][j].isIni = true;
          }

          // compruebo si es final
          if (moment(this.reservasBD[indexReservasBD].feHasta, 'DD[/]MM[/]YYYY').isSame(fechaCuadrito, 'date')) {
            this.cuadritos[i][j].className = this.cuadritos[i][j].className + ' cuadrito_fin';
            this.cuadritos[i][j].isFin = true;
          }
        } else if (indexReservaCliente !== -1) {
          if (
            fechaCuadrito >= moment(this.reservasCliente[indexReservaCliente].feDesde) &&
            fechaCuadrito <= moment(this.reservasCliente[indexReservaCliente].feHasta)
          ) {
            this.cuadritos[i][j] = {
              ...this.reservasBD[indexReservasBD],
              className: '_selected'
            };

            // compruebo si es inicio
            if (
              moment(this.reservasCliente[indexReservaCliente].feDesde, 'DD[/]MM[/]YYYY').isSame(fechaCuadrito, 'date')
            ) {
              this.cuadritos[i][j].className = this.cuadritos[i][j].className + ' cuadrito_ini';
              this.cuadritos[i][j].isIni = true;
            }

            // compruebo si es final
            if (
              moment(this.reservasCliente[indexReservaCliente].feHasta, 'DD[/]MM[/]YYYY').isSame(fechaCuadrito, 'date')
            ) {
              this.cuadritos[i][j].className = this.cuadritos[i][j].className + ' cuadrito_fin';
              this.cuadritos[i][j].isFin = true;
            }
          } else if (fechaCuadrito < moment().subtract(1, 'days')) {
            this.cuadritos[i][j] = {
              ...this.reservasBD[indexReservasBD],
              className: '_blocked'
            };
          } else {
            this.cuadritos[i][j] = {
              ...this.reservasBD[indexReservasBD],
              className: '_nah'
            };
          }
        } else if (fechaCuadrito < moment().subtract(1, 'days')) {
          this.cuadritos[i][j] = {
            ...this.reservasBD[indexReservasBD],
            className: '_blocked'
          };
        } else {
          this.cuadritos[i][j] = {
            ...this.reservasBD[indexReservasBD],
            className: '_nah'
          };
        }
      }
    }
  }

  getToolTip(_op, _room, dia: number) {
    // AGARRO LA FECHA DEL CUADRITO DONDE SE DIO CLICK
    const fechaCuadrito = moment({
      y: this.current.anio,
      M: this.current.noMonth,
      d: dia
    });

    // BUSCO SI LA HABITACION ESTA RESERVADA
    const indexReservasBD = this.reservasBD.findIndex(
      x =>
        x.idHabitacion === _room.idHabitacion &&
        fechaCuadrito >= moment(x.feDesde, 'DD[/]MM[/]YYYY') &&
        fechaCuadrito <= moment(x.feHasta, 'DD[/]MM[/]YYYY')
    );

    const reserva = this.reservasBD[indexReservasBD];

    if (_op === 'I') {
      return '' + reserva.pasajero;
    }

    if (_op === 'O') {
      return '' + reserva.pasajero;
    }
  }

  estaReservada(_room, dia: number) {
    // AGARRO LA FECHA DEL CUADRITO DONDE SE DIO CLICK
    const fechaClick = moment({
      y: this.current.anio,
      M: this.current.noMonth,
      d: dia
    });

    // BUSCO SI LA HABITACION ESTA RESERVADA
    const indexReservasBD = this.reservasBD.findIndex(
      x =>
        x.idHabitacion === _room.idHabitacion &&
        fechaClick >= moment(x.feDesde, 'DD[/]MM[/]YYYY') &&
        fechaClick <= moment(x.feHasta, 'DD[/]MM[/]YYYY')
    );

    if (indexReservasBD !== -1) {
      return true;
    }

    return false;
  }

  _reservar() {
    this.reservar.next(this.reservasCliente);
  }

  _cancelar() {
    this.cancelar.next();
  }

  _modificar() {
    this.modificar.next(this.reservasCliente);
  }

  _cancelarModi() {
    this.cancelarModificacion.next();
    this.estaSeleccionada();
  }

  _siguiente() {
    const diff = moment(`${this.current.anio}-${this.current.noMonth + 1}-01`).diff(moment(), 'years', true);
    // VALIDAMOS QUE NO SE PUEDA AVANZAR HASTA DESPUES DE HOY A UN ANIO
    if (diff >= 0.8) {
      return;
    }
    this.current.nextMonth();
    this.siguiente.next(this.current);
  }

  _anterior() {
    this.current.previousMonth();
    this.anterior.next(this.current);
  }

  private getWeekDay(dia: number) {
    const now = new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0);
    return this.current.dias[now.getDay()];
  }

  private findByIdDb(arreglo: any[], id: number, feIn: Date) {
    return arreglo.findIndex(
      x =>
        x.idHabitacion === id &&
        feIn >= this.getDateString('/', x.feDesde) &&
        feIn <= this.getDateString('/', x.feHasta)
    );
  }

  private getDateString(delimiter: string, date: string) {
    const auxDate = date.split(delimiter);
    return new Date(Number(auxDate[2]), Number(auxDate[1]) - 1, Number(auxDate[0]), 0, 0, 0, 0);
  }

  private loadAllRooms() {
    this.loadingHabitaciones = true;

    this.habitacionService.get().subscribe((response: any) => {
      this.loadingHabitaciones = false;

      if (response.success) {
        this.habitaciones = response.data;
        this.estaSeleccionada();
      } else {
        console.log('Error>> loadAllRooms>> ' + response.mensaje);
      }
    });
  }
}
