import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  constructor(private _products:ProductsService){}

  products:Iproduct[]=[]
  ngOnInit(): void {
    this._products.getProduct().subscribe(
      {
        next:(res)=>{
          this.products=res
          console.log(this.products)
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
  }


}