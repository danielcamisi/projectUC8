import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/products.service';
import { Products } from '../../core/products.modules';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProductsService]
})
export class DashboardComponent implements OnInit{
  products: Products[] | any;

  responsiveOptions: any[] | undefined;

  data: any;

  options: any;
  
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

  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

  this.data = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [540, 325, 702],
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
    ]
};

this.options = {
  responsive: true,
  maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
                color: textColor
            }
        }
    }
};
  
}
}
