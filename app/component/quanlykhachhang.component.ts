import {Component, OnInit} from "@angular/core";
import {KhachHangService} from "../service/khachhang.service";
import {Khachhang} from "../entity/khachhang";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector:'quanlykhachhang',
  templateUrl:'../html/quanlykhachhang.component.html'
})
export class QuanlykhachhangComponent implements OnInit{

  public khachhangs:Khachhang[];
  constructor(private khachhangService:KhachHangService) {}
  ngOnInit(){
    this.getKhachhang();
  }
  public getKhachhang(){
    this.khachhangService.getKh().subscribe(
      (response: Khachhang[])=>{
        this.khachhangs=response;
        console.log("danh sách kh");
        console.log(this.khachhangs);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
