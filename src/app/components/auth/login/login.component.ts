import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../service/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  usuario: any[] = []
  formLogin!: FormGroup;

  constructor(
    private _loginService : LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  login(){
    if(this.formLogin.valid){
      console.log("Acceso", this.formLogin.value)
      this._loginService.ingresar(this.formLogin.value)
      .subscribe({
        next: (res) => {
          console.log("Response: ", res)
          this.route.navigate([''])
        },
        error: (err: HttpErrorResponse) => {
          this.alertaError()
        }
      });
    }
  }

  alertaError(){
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Correo o contraseña incorrecta ",
      showConfirmButton: false,
      timer: 1500
    });
    this.formLogin.reset();
  }

  isAuthenticated() {
    return this._loginService.token() != null;
  }

}
