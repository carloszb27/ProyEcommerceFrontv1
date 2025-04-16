import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductoService } from '../service/producto.service';
import { CategoriaService } from '../service/categoria.service';
import { ProveedorService } from '../service/proveedor.service';
import { Categoria } from '../model/categoria';
import { Proveedor } from '../model/proveedor';
import { Producto } from '../model/producto';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-productos',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './registrar-productos.component.html',
  styleUrl: './registrar-productos.component.css'
})
export class RegistrarProductosComponent implements OnInit{
  
  categorias: Categoria[] = [];

  proveedores: Proveedor[] = [];

  nuevoProducto: Producto = {
    "id": 0,
    "nombre": '',
    "descripcion": '',
    "precio": 0,
    "cantidad": 0,
    "urlImagen": '',
    "fechaVen": '',
    "categoria": {id: 0, nombre: '', active: true},
    "proveedor": {"id": 0,
            "nombre": "",
            "correo": "",
            "numTelefono": "",
            "direccion": "",
            "active": true},
    "active": true
  };

  edit: boolean = false;

  constructor(private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoriaService.lista().subscribe(
      data => { this.categorias = data },
      error => { console.log('Error al obtener los productos: ', error); }
    );

    this.proveedorService.lista().subscribe(
      data => { this.proveedores = data },
      error => { console.log('Error al obtener los productos: ', error); }
    );

    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.productoService.buscar(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.nuevoProducto = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

  }

  registrarProducto() {
    this.productoService.registrar(this.nuevoProducto).
      subscribe(response => {
        console.log('Producto registrado con éxito:', response);
        this.nuevoProducto = {
          "id": 0,"nombre": '',"descripcion": '',"precio": 0,"cantidad": 0,
          "urlImagen": '',"fechaVen": '',"categoria": {id: 0, nombre: '', active: true},"proveedor": {"id": 0,
            "nombre": "",
            "correo": "",
            "numTelefono": "",
            "direccion": "",
            "active": true},"active": true
        };
        this.router.navigate(['/producto/listado']);
      },
        error => {
          console.error('Error al registrar el producto:', error);
        }
      );
  }

  actualizarProducto() {

    this.productoService.actualizar(this.nuevoProducto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/producto']);
        },
        err => console.error(err)
      )
  }

}
