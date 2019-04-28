import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from 'src/app/services/woocommerce.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {

  product: any;
  productVariations: any;
  selectedvariation: number;
  selectedquantity: number;
  productRelated: any;
  productSlug: number;
  variationSelected: string;
  params: object = {};

  loading: boolean;

  constructor(private woo: WoocommerceService,
              private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) {

                this.loading = true;
                this.route.params
                  .subscribe(params => this.productSlug = params.slug);

  }

  ngOnInit() {

    let producturl: string = this.woo.authenticateApi('GET', 'http://devchilevapea.curanipelomejor.cl/wp-json/wc/v1/products', this.params);

    this.http.get(producturl)
    .subscribe( (data: any) => {
    this.product = data;
    console.log(data);
    this.params = {};
    this.loading = false;
    });

  }

showProduct(idx: number) {
  this.router.navigate( ['/producto', idx] );
  console.log(idx);
}

getProducto( idx: string) {
  return this.product[idx];
}

}
