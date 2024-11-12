import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductsData() {
    return [{
        id: '1',
        name:'exemplo alguma coisa',
        price: 70,
        quant: 3,
        image: '../../../assets/imgs/example.png'
    } ] 
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
