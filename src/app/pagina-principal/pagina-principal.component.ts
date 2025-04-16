import { Component } from '@angular/core';
import { ListarProductosComponent } from '../listar-productos/listar-productos.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
