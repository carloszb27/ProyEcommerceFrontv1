import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../model/categoria';
import { Proveedor } from '../../model/proveedor';
import { Producto } from '../../model/producto';
import { CategoriaService } from '../../service/categoria.service';
import { ProveedorService } from '../../service/proveedor.service';
import { ProductoService } from '../../service/producto.service';
import { Response } from '../../model/response';


@Component({
  selector: 'app-registrar-productos',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './registrar-productos.component.html',
  styleUrl: './registrar-productos.component.css'
})
export class RegistrarProductosComponent implements OnInit{
  
  categorias: Categoria[] = [];

  //lotes: Lote[] = [];

  proveedores: Proveedor[] = [];

  nuevoProducto: Producto = {
    "id": 0,
    "nombre": '',
    "descripcion": '',
    "precio": 0.0,
    "urlImagen": '',
    "fechaVen": '',
    "categoriaId": 0,//{id: 0},
    /* "lote":
        {
            "precio": 0.0,
            "stock": 0,
            "proveedor": {
                "id": 0
            }
        } */
    "precioLote": 0.0,
    "stock": 0,
    "descuento": 0.0,
    "proveedorId": 0
  };

  productoaActualizar: any = {
    "id": 0,
    "nombre": '',
    "descripcion": '',
    "precio": 0.0,
    "urlImagen": '',
    "fechaVen": '',
    //"categoria": {id: 0},
    "categoriaId": 0,
    "stock": 0,
    "descuento": 0.0
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
      (data:any) => { this.categorias = data },
      error => { console.log('Error al obtener las categorias: ', error); }
    );

    this.proveedorService.lista().subscribe(
      (data:any) => { this.proveedores = [...data.contenido];},
      error => { console.log('Error al obtener los proveedores: ', error); }
    );

    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.productoService.buscar(params['id'])
        .subscribe(
          (res:Response) => {
            console.log(res);
            this.nuevoProducto = res.contenido;
            this.nuevoProducto.categoriaId = res.contenido.categoria.id;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

  }

  registrarProducto(): any {

    if(this.edit==true){
      return this.actualizarProducto();
    }

    this.productoService.registrar(this.nuevoProducto).
      subscribe(response => {

        console.log('Producto registrado con éxito:', response);
        this.nuevoProducto = {
          "id": 0,
          "nombre": '',
          "descripcion": '',
          "precio": 0.0,
          "urlImagen": '',
          "fechaVen": '',
          "categoriaId": 0,
          "precioLote": 0.0,
          "stock": 0,
          "descuento": 0.0,
          "proveedorId": 0
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
          this.router.navigate(['/producto/listado']);
        },
        err => console.error(err)
      )
  }

}
