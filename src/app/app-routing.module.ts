import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
{path: 'productos', component: ProductosComponent},
{path: 'producto/:id', component: ProductoComponent},
{path: 'home', component: HomeComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
