import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { DonHangService } from '../service/donhang.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Donhang} from "../entity/donhang";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-donhang',
  templateUrl: '../html/donhang.component.html'
})
export class DonHangComponent implements OnInit {
  @ViewChild('sdtKhInput') sdtKhInput: ElementRef;
   sdtKH: number;
  public donhangs:Donhang[];
  constructor(private donHangService: DonHangService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     //this.sdtKH = +this.route.snapshot.paramMap.get('sdtKH');
    // this.donHangService.getDonHang(this.sdtKH).subscribe((data) => {
    //   // Xử lý dữ liệu trả về từ Servlet
    //   console.log(data);
    // });
    this.getDonHang();
  }

  public getDonHang(){
    this.sdtKH = this.sdtKhInput.nativeElement.value;
    this.donHangService.getDonHang(this.sdtKH).subscribe(
      (response:Donhang[])=>{
        this.donhangs=response;
        console.log(response);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
