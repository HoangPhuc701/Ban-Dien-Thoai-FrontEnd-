import {Component, OnInit} from "@angular/core";
import {CartService} from "../service/cart.service";
import {DienThoai} from "../entity/dienthoai";

@Component({
  selector:'giohang',
  templateUrl:'../html/giohang.component.html'
})

export class GiohangComponent implements OnInit{
  cart: DienThoai[] = [];
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cart = items;
    });
  }
  get cartTotalValue():number{
    return this.cart.reduce((total,product)=>total + product.giaBan,0);
  }
  inputValueName: string = '';
  inputDiaChi: string = '';
  inputSDT: string = '';

  onInputChange(event: any) {
    this.inputValueName = event.target.value;
    // this.inputDiaChi = event.target.value;
    // this.inputSDT = event.target.value;
  }
  onDiaChi(event:any){
    this.inputDiaChi= event.target.value;
  }
  onSDT(event:any){
    this.inputSDT=event.target.value;
  }
  getInputValue() {
    console.log('Giá trị từ trường input:', this.inputValueName);
    // Bạn có thể sử dụng giá trị từ trường input ở đây
    return this.inputValueName;
  }
  getInputDiaChi(){
    return this.inputDiaChi;
  }
  getInputSDT(){
    return this.inputSDT;
  }
  saveContract(){
    //this.getValue();
    // window.location.href="http://localhost:8080/backend-1.0-SNAPSHOT/api/dienthoai/?value=" + this.cartTotalValue +"&&product="+this.cart.pop().maDienThoai;
    let url = "http://localhost:8080/backend-1.0-SNAPSHOT/api/dienthoai/?";

    for (const product of this.cart) {
      url += `product=${product.maDienThoai}&`;
    }

    url += `value=${this.cartTotalValue}&`;
    url+=`name=${this.getInputValue()}&`;
    url+=`diachi=${this.getInputDiaChi()}&`;
    url+=`sdt=${this.getInputSDT()}`;
    window.location.href = url;

  }
}
