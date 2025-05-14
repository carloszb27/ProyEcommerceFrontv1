import { Component, OnInit } from '@angular/core';
import { ListarProductosComponent } from '../listar-productos/listar-productos.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../model/producto';
import { Categoria } from '../../model/categoria';
import { ProductoService } from '../../service/producto.service';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent implements OnInit {
  
    productos: any[] = [];

    categorias: any[] = []

  constructor(private productoService: ProductoService, private categoriaService: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      (data: any) => {
        this.productos = data.contenido;
      }, (error: any) => {
        console.error('Error al cargar los productos', error);
      });
  }

}
