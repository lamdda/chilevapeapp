import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ProductosComponent } from '../productos/productos.component';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  // producto: any = {};
  producto = '';

  constructor( private activatedRoute: ActivatedRoute
               // private getProducto: ProductosComponent
               ) {

    this.activatedRoute.params
      .subscribe( params => {
        console.log(params['id']);
        // this.producto = this.getProducto.getProducto( params['id'] );
        this.producto = params['id'];
        // console.log(this.producto);
      });
  }

}
