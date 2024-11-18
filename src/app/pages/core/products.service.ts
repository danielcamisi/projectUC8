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
        desc: 'Localização: Av Marcio Egídio de Souza Aranha',
        quant: 87,
        image: '../../assets/imgs/mercado1.png'
    },
    {
        id: '2',
        name: 'Unidade de São Paulo',
        desc: 'Localização: Rua Lucio Petit de Souza',
        quant: 65,
        image: '../../assets/imgs/mercado2.png'
    },
    {
        id: '3',
        name: 'Unidade de Sorocaba',
        desc: 'Localização: Av Orosimbo Maia',
        quant: 69,
        image: '../../assets/imgs/mercado3.png'
    },
    {
        id: '4',
        name: 'Unidade de Paulínia',
        desc: 'Localização: Rua Guinsso Morello',
        quant: 12,
        image: '../../assets/imgs/mercado4.png'
    },
    {
        id: '5',
        name: 'Unidade de Valinhos',
        desc: 'Localização: Av Paulínea',
        quant: 24,
        image: '../../assets/imgs/mercado5.png'
    },
    {
        id: '6',
        name: 'Unidade de Vinhedo',
        desc: 'Localização: Av Vinhedo',
        quant: 19,
        image: '../../assets/imgs/mercado6.png'
    },
    {
        id: '7',
        name: 'Unidade de Hortolândia',
        desc: 'Localização: Av John Boyd Dunlop',
        quant: 48,
        image: '../../assets/imgs/mercado7.png'
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