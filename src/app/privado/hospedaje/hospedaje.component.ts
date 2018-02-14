import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HospedajeService } from './hospedaje.service';
import { SocialService } from '../services/social.service';
import { PaisService } from '../services/pais.service';
import { ConfirmacionService } from '../../compartido/components/modal-confirmacion/confirmacion.service';
import { ConfirmacionEventService } from '../../compartido/components/modal-confirmacion/confirmacion-event.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
import { ToastService } from '../../compartido/services/toast.service';

declare var jQuery: any;

@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.component.html',
  styleUrls: ['./hospedaje.component.css']
})
export class HospedajeComponent implements OnInit, AfterViewInit {

  model: any = {};
  anteriorModel: any = {};
  readOnly = true;

  paises: any = [];
  redes: any = [];
  valuePa: string;
  loading = false;
  loading_hos = true;

  constructor(private router: Router,
    private hospedajeService: HospedajeService,
    private socialService: SocialService,
    private paisService: PaisService,
    private toastService: ToastService,
    private confirmacionService: ConfirmacionService,
    private confirmacionEventService: ConfirmacionEventService) { }

  ngOnInit() {

    this.setSelect2Paises();
    // this.loadInfo();
  }

  ngAfterViewInit() {
    jQuery('#pais').select2();
  }

  setEdita() {

    this.readOnly = false;
    this.anteriorModel = Object.assign({}, this.model);
  }

  setCancela() {

    this.readOnly = true;
    this.model = Object.assign({}, this.anteriorModel);
  }

  guardar(form: NgForm) {

    this.loading = true;

    this.model.accion = 'U';
    this.model.redes = this.redes;
    this.model.valuePa = jQuery('#pais').val() || this.model.idPais;
    
    this.hospedajeService.mantenimiento(this.model)
      .subscribe(
      data => {
        if (data.success) {

          this.toastService.showSuccess('Datos actualzados con éxito');
          this.loading = false;
          form.resetForm();
          this.loadInfo(false);
          this.readOnly = true;
        } else {

          this.toastService.showError(data.mensaje);
          this.loading = false;
          jQuery('#messModal').modal('show');
        }
      },
      error => {

        this.toastService.showError('Ocurrió al actualizar los datos del hospedaje');
        console.log(error);
        this.loading = false;
        jQuery('#messModal').modal('show');
      });

  }

  private setSelect2Paises() {

    this.paisService.getAll().subscribe(
      paises => {

        if (paises.success) {


          for (let i = 0; i < paises.data.length; i++) {
            this.paises.push({ id: '' + paises.data[i].idpais, text: paises.data[i].pais });
          }
        } else {
          console.log('Error>> loadAllFormaPagos>> ' + paises.mensaje);
        }
        this.loadInfo();
      });
  }

  changedPa(e: any): void {

    this.model.valuePa = e.value;
  }

  private mapSocial() {

    for (let i = 0; i < this.redes.length; i++) {

      for (let j = 0; j < this.model.redes.length; j++) {
        
        if (this.redes[i].idsocial === this.model.redes[j].idsocial) {

          this.redes[i].valor = this.model.redes[j].valor;
          // break;
        }
      }
    }
  }

  private loadSocial() {

    this.socialService.getAll().subscribe(social => {

      if (social.success) {

        this.redes = social.data;
        this.mapSocial();
      } else {
        console.log('Error>> loadInfo>> ' + social.mensaje);
      }

      this.loading_hos = false;
    }, error => {
      console.log('Error>> loadInfo>> ' + error.message);
      this.loading_hos = false;
    });
  }

  private loadInfo(loading = true) {

    this.loading_hos = loading;

    this.hospedajeService.get().subscribe(info => {

      this.loading_hos = false;

      if (info.success) {

        this.model = info.data[0][0];
        this.model.redes = info.data[1];

        setTimeout(() => {
          jQuery('#pais').select2();

          jQuery('#pais').val('' + this.model.idpais);
          jQuery('#pais').trigger('change');
        }, 200);

        this.loadSocial();
      } else {
        console.log('Error>> loadInfo>> ' + info.mensaje);
      }

    }, error => {
      console.log('Error>> loadInfo>> ' + error.message);
      this.loading_hos = false;
    });
  }

}
