import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { RegistrarProductosComponent } from './components/registrar-productos/registrar-productos.component';
import { ListarLotesComponent } from './components/listar-lotes/listar-lotes.component';
import { ListarCarritosComponent } from './components/listar-carritos/listar-carritos.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { AuthGuard } from './components/helpers/auth.guard';

export const routes: Routes = [
    {path: '', component: PaginaPrincipalComponent},
    {path: 'login', component: LoginComponent},
    {path: 'producto/listado', component: ListarProductosComponent, canActivate: [AuthGuard]},
    {path: 'carrito/listado', component: ListarCarritosComponent, canActivate: [AuthGuard]},
    {path: 'producto/agregar', component: RegistrarProductosComponent, canActivate: [AuthGuard]},
    {path: 'producto/editar/:id', component: RegistrarProductosComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileUserComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'login', pathMatch: 'full'}];
