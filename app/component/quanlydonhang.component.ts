import {Component} from "@angular/core";
import {Donhang} from "../entity/donhang";
import {DonHangService} from "../service/donhang.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector:'quanlydonhang',
  templateUrl:'../html/quanlydonhang.component.html'
})
export class QuanlydonhangComponent{
  public donhangs:Donhang[];
  constructor(private donhangservice:DonHangService) {
  }
  filterData() {
    const ngayLapDon = (document.getElementById('ngayLapDon') as HTMLInputElement).value;
    console.log("ngay");
    console.log(ngayLapDon);
    this.donhangservice.QuanLyDonHang(ngayLapDon).subscribe(
      (response:Donhang[])=>{
        this.donhangs=response;
        console.log("ds don ngay");
        console.log(this.donhangs);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
}
