import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';
import { ListarLotesComponent } from './listar-lotes/listar-lotes.component';
import { ListarCarritosComponent } from './listar-carritos/listar-carritos.component';

export const routes: Routes = [{path: '', component: PaginaPrincipalComponent},
    {path: 'producto/listado', component: ListarProductosComponent},
    {path: 'lote/listado', component: ListarLotesComponent},
    {path: 'carrito/listado', component: ListarCarritosComponent},
    {path: 'producto/agregar', component: RegistrarProductosComponent},
    {path: 'producto/editar/:id', component: RegistrarProductosComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}];
