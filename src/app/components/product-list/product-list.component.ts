import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private pro_Serv: ProductService) { }

  ngOnInit(): void {
    this.pro_Serv.getProducts().subscribe(d => {
      this.products = d;
    });
  }

}
