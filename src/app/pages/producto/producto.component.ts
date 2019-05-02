import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WoocommerceService } from 'src/app/services/woocommerce.service';
// import { ProductosComponent } from '../productos/productos.component';

declare var $: any;
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  // producto: any = {};
  producto : any;

  constructor( private activatedRoute: ActivatedRoute,
    public woo: WoocommerceService
               // private getProducto: ProductosComponent
               ) {

    this.activatedRoute.params
      .subscribe( params => {
        this.producto = params['id'];
        console.log(this.producto);
        this.woo.getProducto( this.producto );
      });
  }

  transitionColor(foto: string) {
    $('#fotoProducto').attr('src', foto );
  }

}
