import {Component, OnInit,Input } from "@angular/core";
import {DienThoai} from "../entity/dienthoai";
import {CartService} from "../service/cart.service";
import {DienthoaiService} from "../service/dienthoai.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "./login";
import {HttpClient} from "@angular/common/http";
import {DonHangService} from "../service/donhang.service";

@Component({
  selector:'navigation',
  templateUrl:'../html/nav.html',
  styleUrls:['../css/login-popup.css']
})
export class AppComponent implements OnInit{
  cart: DienThoai[] = [];
  search:DienThoai[]=[];
  get cartTotalValue():number{
    return this.cart.reduce((total,product)=>total + product.giaBan,0);
  }
  constructor(private cartService: CartService,private router: Router,private dialogRef:MatDialog,private http: HttpClient,
              private route: ActivatedRoute,private dhService:DonHangService) {}

  // openDialog(){
  //   this.dialogRef.open(LoginComponent);
  // }

   keyword: string = '';
  // dienthoaisearch:DienThoai[]=[];
   filterPeople() {
  //   //return this.dienthoais.filter(person => person.name.toLowerCase().includes(this.keyword.toLowerCase()));
  //  return this.dienthoaisearch.filter(dt=>dt.tenDienThoai.toLowerCase().includes(this.keyword.toLowerCase()));
      return this.search.filter(dt=>dt.tenDienThoai.toLowerCase().includes(this.keyword.toLowerCase()));
      console.log("aaa" +this.keyword);
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

  inputValueName: string = '';
  inputDiaChi: string = '';
  inputSDT: string = '';
  // onInputChange(event: any) {
  //   this.inputValueName = event.target.value;
  //   // this.inputDiaChi = event.target.value;
  //   // this.inputSDT = event.target.value;
  // }
  // onDiaChi(event:any){
  //   this.inputDiaChi= event.target.value;
  // }
  // onSDT(event:any){
  //   this.inputSDT=event.target.value;
  // }

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

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cart = items;
    });
    //const id = this.route.snapshot.params['info1'];

  }

  // isLoginPopupVisible = false;
  //
  // openLoginPopup() {
  //   this.isLoginPopupVisible = true;
  // }

  // navigateToLogin() {
  //   this.router.navigate(['/login']); // Navigate to the "/login" route
  // }



  // test
  isCartVisible = false;
  toggleCartVisibility() {
    this.isCartVisible = !this.isCartVisible;
  }
  isLogiVisisible=false;
  toggleLoginVisibility(){
    this.isLogiVisisible=!this.isLogiVisisible;
  }
  DonHangVisisible=false;
  DonHangVisible(){
    this.DonHangVisisible=!this.DonHangVisisible;
  }

  isCartModalOpen = false;
  openCartModal() {
    this.isCartModalOpen = true;
  }

  closeCartModal() {
    this.isCartModalOpen = false;
  }
  protected readonly onsubmit = onsubmit;

  openModal(){
    const createModal = document.getElementById('createTypeModal');
    if(createModal!=null){
      createModal.style.display='block';
    }
  }
}


