import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductsData() {
    return [{
        id: '1',
        name: 'Unidade de Campinas',
        price: 700,
        quant: 1000,
        image: 'https://th.bing.com/th/id/OIG4.vQ6XEhBj4D2aS61U6_sD?pid=ImgGn'
    },
    {
        id: '2',
        name: 'Unidade de São Paulo',
        price: 700,
        quant: 1000,
        image: 'assets/imgs/mercado2.png'
    },
    {
        id: '3',
        name: 'Unidade de Sorocaba',
        price: 700,
        quant: 1000,
        image: 'assets/imgs/mercado3.png'
    },
    {
        id: '4',
        name: 'Unidade de Paulínia',
        price: 700,
        quant: 1000,
        image: '/assets/imgs/mercado4.png'
    },
    {
        id: '5',
        name: 'Unidade de Valinhos',
        price: 700,
        quant: 1000,
        image: 'app/assets/imgs/mercado5.png'
    },
    {
        id: '6',
        name: 'Unidade de Vinhedo',
        price: 700,
        quant: 1000,
        image: 'app/assets/imgs/mercado6.png'
    },
    {
        id: '7',
        name: 'Unidade de Hortolândia',
        price: 700,
        quant: 1000,
        image: 'app/assets/imgs/mercado7.png'
    }];
  }

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}