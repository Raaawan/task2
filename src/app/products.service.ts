import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _product:HttpClient) { }

  getProduct():Observable<any>{
    return this._product.get('https://fakestoreapi.com/products?fbclid=IwY2xjawFAhihleHRuA2FlbQIxMAABHRx9JLn53fWVSU7ZDFMD8x7n6dlv3EdEOCBP0_gqoEZ8jPIpxzBxr3Toiw_aem_unFNeabQyZOfKmN2wSkOsA')
  }
}
