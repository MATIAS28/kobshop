import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-articles',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  public  products: Product[];
  public status: string;
  public name: string;
  public title: string;
  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
        let name = params.name;
        this.getProducts(name);
        this.title = params.name;
    });
  }

  getProducts(name){
    this._productService.getProducts(name).subscribe(
      response => {
        if(response.product){
            this.products = response.product;
          }else{
            this.status = 'failed';
          }
      },
      error =>{
        console.log(<any>error)
      }
    );
  }

}
