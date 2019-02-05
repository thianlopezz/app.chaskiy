import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef
} from '@angular/core';
import { AutenticacionService } from '../../../publico/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  chasker: any;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private autenticacionService: AutenticacionService
  ) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.chasker = this.autenticacionService.getLogin();
    this.cdRef.detectChanges();
  }

  isLogged() {
    return this.autenticacionService.getLogin();
  }

  logOut() {
    this.autenticacionService.logout();
    this.router.navigate(['/login']);
  }
}
