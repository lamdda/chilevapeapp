import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
{path: 'productos', component: ProductosComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
