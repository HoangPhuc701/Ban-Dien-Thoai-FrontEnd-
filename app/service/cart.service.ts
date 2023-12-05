// cart.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {DienThoai} from "../entity/dienthoai";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private cartItems: BehaviorSubject<DienThoai[]> = new BehaviorSubject<DienThoai[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  addToCart(product: DienThoai) {
    const currentCart = this.cartItems.value;
    currentCart.push(product);
    this.cartItems.next(currentCart);
  }

  getCart() {
    return this.cartItems.value;
  }
}
