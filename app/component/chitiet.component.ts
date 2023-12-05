import {Component, OnInit} from "@angular/core";
import {DienThoai} from "../entity/dienthoai";
import {CartService} from "../service/cart.service";
import {chitietService} from "../service/chitiet.service";

@Component({
  selector:'chitiet',
  templateUrl:'../html/chitiet.component.html'
})

export class ChitietComponent implements OnInit{
  constructor(private chitietService: chitietService,private cartService: CartService) {}
  item: DienThoai[] = [];
  ngOnInit(): void {
    this.chitietService.Items$.subscribe((items) => {
      this.item = items;
    });
  }
  addToCart(product: DienThoai) {
    this.cartService.addToCart(product);
  }
}
