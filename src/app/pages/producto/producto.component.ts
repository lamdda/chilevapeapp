import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WoocommerceService } from 'src/app/services/woocommerce.service';
import { AddCarInterface } from 'src/app/models/addCar-interface';

declare var $: any;
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  addCar: AddCarInterface = {
    cantidad: 1,
    nombre: this.woo.producto.name,
    id: this.woo.producto.id
  };

  producto : any;

  constructor( private activatedRoute: ActivatedRoute,
    public woo: WoocommerceService) {

    this.activatedRoute.params
      .subscribe( params => {
        this.producto = params['id'];
        console.log(this.producto);
        this.woo.getProducto( this.producto );
      });
  }

  ngOnInit() {}

  transitionColor(foto: string, clase: string) {
    $('#fotoProducto').attr('src', foto );
    $('.minProducto').removeClass('minProductoActivo');
    $('.'+ clase).addClass('minProductoActivo');
  }

  addProductCar( producto: string ) {
    console.log('Agregado Carrito: ', producto);
  }

}
