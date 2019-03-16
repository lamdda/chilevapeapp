import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {

  constructor(private woo: WoocommerceService) {

    console.log('componente iniciado!');

  }

  ngOnInit() {
  }

}
