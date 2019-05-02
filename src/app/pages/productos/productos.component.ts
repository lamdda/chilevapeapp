import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  params = {};
  product: any;
  loading: boolean;

  constructor(public woo: WoocommerceService) {}

  ngOnInit() {
    this.woo.dataProductos();
  }

}
