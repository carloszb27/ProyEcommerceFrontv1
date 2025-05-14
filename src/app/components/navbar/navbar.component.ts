import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { LoginService } from '../../service/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  isAutenticated: boolean = false;

  ngOnInit(): void {
    this.isAutenticated = this.loginService.token()?.startsWith("ey") ? true : false;
  }

  cerrarSesion(): void {
    this.loginService.logout();
    this.isAutenticated = false;
  }

}
