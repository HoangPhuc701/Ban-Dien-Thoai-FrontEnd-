import {Component, OnInit,Input } from '@angular/core';
import {DienThoai} from "../entity/dienthoai";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {DienthoaiService} from "../service/dienthoai.service";
import {CartService} from "../service/cart.service";
import {chitietService} from "../service/chitiet.service";
// import {LoginPopupService} from "../service/login-popup.service";

@Component({
  selector: 'app-root',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css']
})

export class NavigationComponent implements OnInit{
  public dienthoais: DienThoai[];
  constructor(private dienthoaiService: DienthoaiService,private cartService: CartService,private ctService:chitietService) {}
  addToCart(product: DienThoai) {
    this.cartService.addToCart(product);
  }
  xemItem(item:DienThoai){
    this.ctService.XemItem(item);
  }
  ngOnInit() {
    this.getDienThoai();
  }

  public getDienThoai():void{
    this.dienthoaiService.getDienThoai().subscribe(
      (response:DienThoai[])=>{
        this.dienthoais = response;
        console.log(response);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
//
//   productInfo: DienThoai | null = null;
//   showProductInfo(dienthoai: DienThoai) {
//     this.productInfo = dienthoai;
//   }
//
//   // Ẩn thông tin sản phẩm khi di chuột ra khỏi ảnh
//   hideProductInfo() {
//     this.productInfo = null;
//   }
// //
//
//   isLoginPopupVisible = false;
//
//   openLoginPopup() {
//     this.isLoginPopupVisible = true;
//   }
//
//   isCartVisible = false;
//   toggleCartVisibility() {
//     this.isCartVisible = !this.isCartVisible;
//   }
}



