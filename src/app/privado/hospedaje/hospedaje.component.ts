import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
import { HospedajeService } from './hospedaje.service';
import { SocialService } from '../services/social.service';
import { PaisService } from '../services/pais.service';
import { ConfirmacionService } from '../../compartido/components/modal-confirmacion/confirmacion.service';
import { ConfirmacionEventService } from '../../compartido/components/modal-confirmacion/confirmacion-event.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
declare var jQuery: any;

@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.component.html',
  styleUrls: ['./hospedaje.component.css']
})
export class HospedajeComponent implements OnInit {

  model: any = {};
  anteriorModel: any = {};
  readOnly = true;

  paises: any = [];
  redes: any = [];
  valuePa: string;
  loading = false;

  constructor(private router: Router,
                private hospedajeService: HospedajeService,
                private socialService: SocialService,
                private paisService: PaisService,
                private mensajeService: MensajeService,
                private confirmacionService: ConfirmacionService,
                private confirmacionEventService: ConfirmacionEventService) { }

  ngOnInit() {

    this.setSelect2Paises();
    this.loadInfo();

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
    this.model.valuePa = this.model.valuePa || this.model.idPais;

    this.hospedajeService.mantenimiento(this.model)
        .subscribe(
            data => {
                if (data.success) {

                  this.mensajeService.success('Registro modificado con éxito');
                  this.loading = false;
                  form.resetForm();
                  this.loadInfo();
                  this.readOnly = true;
                } else {

                  this.mensajeService.error(data.mensaje);
                  this.loading = false;
                  jQuery('#messModal').modal('show');
                }
            },
            error => {

                this.mensajeService.error('Ocurrió al modificar el registro');
                console.log(error);
                this.loading = false;
                jQuery('#messModal').modal('show');
            });

  }

  private setSelect2Paises() {

    this.paisService.getAll().subscribe(
      paises => {

        if (paises.success) {

          this.paises = new Array<Select2OptionData>();

          for (let i = 0; i < paises.data.length; i++) {
            this.paises.push({id: '' + paises.data[i].idPais, text: paises.data[i].pais});
          }
        } else {
          console.log('Error>> loadAllFormaPagos>> ' + paises.mensaje);
        }
      });
  }

  changedPa(e: any): void {

      this.model.valuePa = e.value;
    }

  private mapSocial() {

    for (let i = 0; i < this.redes.length; i++) {

      for (let j = 0; j < this.model.redes.length; j++) {

        if (this.redes[i].idSocial === this.model.redes[j].idSocial) {

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

    });
  }

  private loadInfo() {

    this.hospedajeService.get().subscribe(info => {

      if (info.success) {

        this.model = info.data[0][0];
        this.model.redes = info.data[1];

        this.valuePa = this.model.idPais;

        this.loadSocial();
      } else {
        console.log('Error>> loadInfo>> ' + info.mensaje);
      }

    });
  }

}
