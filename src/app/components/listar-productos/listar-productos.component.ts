import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css',
})
export class ListarProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      (data: any) => {
        console.log(data);
        this.productos = [...data.contenido];
        console.log(this.productos)
        //this.productos = [...data];
      },
      (error: any) => {
        console.error('Error al cargar los productos', error);
      }
    );
  }

  eliminarProducto(id: number): void {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Confirmar para eliminar el producto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo',
      cancelButtonText: 'No, cancelar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.productoService.eliminar(id).subscribe(
          (res) => {
            console.log(res);
            this.cargarProductos();
            Swal.fire({
              title: 'Producto eliminado!',
              text: 'El empleado ha sido eliminado con exito.',
              icon: 'success',
            });
            this.cargarProductos();
          },
          (err) => {
            console.error(err);
            this.router.navigated = false;
            this.router.navigate([this.router.url]);
          }
        );
        
      }
    });
  }

}
