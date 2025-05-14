import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoteService } from '../../service/lote.service';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-listar-lotes',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listar-lotes.component.html',
  styleUrl: './listar-lotes.component.css'
})
export class ListarLotesComponent implements OnInit{

  lote: any[] = [];

  productos: Producto[] = [{
    nombre: '',
    descripcion: '',
    precio: 0,
    urlImagen: '',
    fechaVen: '',
    categoriaId: 0,
    lote: {
    }
  }];

  constructor(private loteService: LoteService, private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    //this.cargarLotes();

  }
/*
  cargarLotes(): void {

    this.loteService.lista().subscribe(
      (data: any) => {
      this.lote = data;

      this.cargarProductosPorLote()

      this.lotes.forEach(lote => {
        this.productos.forEach(producto => {
          if (lote?.id === producto.lotes[0]?.id) {
            lote.producto = producto;
          }
        });

      })

      //console.log(this.lotes);
    }, (error: any) => {
      console.error('Error al cargar los lotes', error);
    });
  }

  cargarProductosPorLote(): void {

      this.productoService.listarPorLote(lote.id).subscribe(
        (data: any) => {
          
          lote.producto = data || null;

          
        }, (error: any) => {
          console.error('Error al cargar los productos por lote', error);
        });

  }

  eliminarLote(id: number): void {
    this.loteService.eliminar(id)
      .subscribe(
        res => {
          console.log(res);
          this.cargarLotes();
        },
        err => {
          console.error(err)
          this.router.navigated = false;
          this.router.navigate([this.router.url]);
        }
      )
  }
*/
}
