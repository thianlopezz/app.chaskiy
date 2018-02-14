import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AutenticacionService } from '../../../publico/services/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  chasker: any;

  constructor(private cdRef: ChangeDetectorRef,
    private autenticacionService: AutenticacionService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.chasker = this.autenticacionService.getLogin();
    this.cdRef.detectChanges();
  }

  isLogged() {
    return this.autenticacionService.getLogin();
  }

}
