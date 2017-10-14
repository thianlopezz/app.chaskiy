import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService, ConfirmService, AcceptService, PaisService,
          HospedajeService, AuthenticationService, MessageService,
          SocialService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';

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

  constructor(private authService: AuthenticationService,
                private router: Router,
                private hospedajeService: HospedajeService,
                private socialService: SocialService,
                private paisService: PaisService,
                private alertService: AlertService,
                private messService: MessageService,
                private confirmService: ConfirmService,
                private acceptService: AcceptService) { }

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

    this.hospedajeService.mantenimiento(this.model)
        .subscribe(
            data => {
                if (data.success) {

                  this.messService.success('Registro modificado con éxito');
                  this.loading = false;
                  form.resetForm();
                  this.loadInfo();
                  this.readOnly = true;
                } else {

                  this.messService.error(data.mensaje);
                  this.loading = false;
                  jQuery('#messModal').modal('show');
                }
            },
            error => {

                this.messService.error('Ocurrió al modificar el registro');
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

          // this.defaultPa();
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
