import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/products.service';
import { Products } from '../../core/products.modules';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [ProductsService]
})
export class DashboardComponent implements OnInit{
  products: Products[] | undefined;

  responsiveOptions: any[] | undefined;
  
  constructor(private productService: ProductsService){}
  ngOnInit(): void {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  
}

