import { Component, OnInit } from '@angular/core';
import { PaginaPrincipalComponent } from "../pagina-principal/pagina-principal.component";
import { Router, RouterModule } from '@angular/router';
import { ProductoService } from '../service/producto.service';
import { CommonModule } from '@angular/common';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent implements OnInit{

  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) {

  }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {

    this.productoService.lista().subscribe(
      (data: any) => {
      this.productos = data;
    }, (error: any) => {
      console.error('Error al cargar los productos', error);
    });
  }

  eliminarProducto(id: number): void {
    this.productoService.eliminar(id)
      .subscribe(
        res => {
          console.log(res);
          this.cargarProductos();
        },
        err => {
          console.error(err)
          this.router.navigated = false;
          this.router.navigate([this.router.url]);
        }
      )
  }

}
