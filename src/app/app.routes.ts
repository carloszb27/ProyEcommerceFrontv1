import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';

export const routes: Routes = [{path: '', component: PaginaPrincipalComponent},
    {path: 'producto/listado', component: ListarProductosComponent},
    {path: 'producto/agregar', component: RegistrarProductosComponent},
    {path: 'producto/editar/:id', component: RegistrarProductosComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}];
