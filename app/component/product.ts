import {Component, ElementRef, ViewChild} from "@angular/core";
import {NhanVien} from "../entity/nhanvien";
import {DienThoai} from "../entity/dienthoai";
import {DienThoaiModel} from "../entity/DienThoaiModel";
import {DienthoaiService} from "../service/dienthoai.service";

@Component({
  selector: 'product',
  templateUrl:'../html/product.component.html'
})

export class ProductComponent{
  NCC: string;
  DungLuong:string;
  MaDt:string;
  TenDT:string;
  MoTa:string;
  HinhAnh:string;
  SoLuong:number;
  GiaBan:number;
  MaCH:string = 'CH1';
  @ViewChild('hangdt') hangdt: ElementRef;
  @ViewChild('dungluong') dungluong: ElementRef;
  @ViewChild('tendt') ten: ElementRef;
  @ViewChild('mota') mota: ElementRef;
  @ViewChild('hinhanh') hinhanh: ElementRef;
  @ViewChild('soluong') soluong: ElementRef;
  @ViewChild('giaban') giaban: ElementRef;
  constructor(private dienthoaiService:DienthoaiService) { }
  dienthoai: DienThoai = new DienThoaiModel();

  Them(){
    this.NCC = this.hangdt.nativeElement.value;
    this.DungLuong = this.dungluong.nativeElement.value;
    this.MaDt = this.NCC.concat(this.DungLuong);
    this.TenDT = this.ten.nativeElement.value;
    this.MoTa = this.mota.nativeElement.value;
    this.HinhAnh = this.hinhanh.nativeElement.value;
    this.SoLuong = this.soluong.nativeElement.value;
    this.GiaBan = this.giaban.nativeElement.value;

    this.dienthoai.maDienThoai = this.hangdt.nativeElement.value;
    this.dienthoai.tenDienThoai =this.ten.nativeElement.value;
    this.dienthoai.thongTinDienThoai = this.MoTa;
    this.dienthoai.hinhAnh = this.HinhAnh;
    this.dienthoai.dungLuong = this.DungLuong;
    this.dienthoai.soLuong = this.SoLuong;
    this.dienthoai.giaBan = this.GiaBan;
    this.dienthoai.maNCC = this.NCC;
    this.dienthoai.maCuaHang = this.MaCH;

    console.log(this.NCC);
    console.log(this.MaDt);
    console.log(this.dienthoai);
    this.dienthoaiService.addDienThoai(this.dienthoai).subscribe();
  }

}
