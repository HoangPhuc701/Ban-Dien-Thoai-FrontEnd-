import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {DienThoai} from "../entity/dienthoai";

@Injectable({
  providedIn: "root"
})

export class chitietService{
  private Items:BehaviorSubject<DienThoai[]> = new BehaviorSubject<DienThoai[]>([]);
  public Items$ = this.Items.asObservable();

  XemItem(product: DienThoai) {
    const currentCart = this.Items.value;
    currentCart.push(product);
    this.Items.next(currentCart);
  }
}
