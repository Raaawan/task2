import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:"",redirectTo:"products",pathMatch:"full",title:"Products"},
    {path:"products",component:ProductsComponent,title:"Products"},
    {path:"**",component:ErrorComponent,title:"Error"},
];
