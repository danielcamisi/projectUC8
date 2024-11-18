import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/products.service';
import { Products } from '../../core/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProductsService]
})
export class DashboardComponent implements OnInit {
  products: Products[] | any;
  responsiveOptions: any[] | undefined;
  data: any;
  options: any;

  // Dados do gráfico
  employeeData: { name: string; quant: number }[] = [
    { name: 'Campinas', quant: 540 },
    { name: 'Valinhos', quant: 236 },
    { name: 'Vinhedo', quant: 732 },
    { name: 'Hortolândia', quant: 120 },
    { name: 'Paulínia', quant: 340 },
    { name: 'São Paulo', quant: 512 },
    { name: 'Sorocaba', quant: 430 }
  ];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    // Atualizar o gráfico
    this.updateChart();

    // Carregar os produtos
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    // Configurar as opções responsivas para o carrossel
    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
      { breakpoint: '991px', numVisible: 2, numScroll: 1 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];

    // Configurar opções do gráfico
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
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

  // Atualizar os dados do gráfico
  updateChart(): void {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: this.employeeData.map((item) => item.name), // Rótulos do gráfico
      datasets: [
        {
          data: this.employeeData.map((item) => item.quant), // Quantidade de funcionários
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--pink-500'),
            documentStyle.getPropertyValue('--purple-500'),
            documentStyle.getPropertyValue('--teal-500'),
            documentStyle.getPropertyValue('--orange-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--pink-400'),
            documentStyle.getPropertyValue('--purple-400'),
            documentStyle.getPropertyValue('--teal-400'),
            documentStyle.getPropertyValue('--orange-400')
          ]
        }
      ]
    };
  }
}