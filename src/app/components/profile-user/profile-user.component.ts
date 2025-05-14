import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { Response } from '../../model/response';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent implements OnInit {

  currentUser?: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getCurrentUser().subscribe(
      (data:any) => {
        console.log(data);
        this.currentUser = data.contenido;
      },
      (error: any) => {
        console.error('Error al cargar el usuario', error);
      });
    }
}
