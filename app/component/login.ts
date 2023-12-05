import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";
import {KhachHangService} from "../service/khachhang.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Khachhang} from "../entity/khachhang";
import {NhanVien} from "../entity/nhanvien";
import {NhanVienService} from "../service/nhanvien.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ManagerComponent} from "./manager.component";


@Component({
  selector:'login',
  templateUrl:'../html/login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private khachhangService:KhachHangService,private nhanvienService:NhanVienService,private route: ActivatedRoute, private router: Router) { }
  // ngOnInit() {
  //   //this.getKhachHang();
  //   this.manv = +this.route.snapshot.paramMap.get("");
  // }
  //public khachhangs:Khachhang[]=[];

  // public getKhachHang():void{
  //    // = document.getElementById('username');
  //   this.khachhangService.getKhachhang(this.username,this.password).subscribe(
  //     (response:Khachhang[])=>{
  //       this.khachhangs = response;
  //       console.log(response);
  //     },
  //     (error:HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   );
  // }
  //constructor(private authService: AuthService) {} // Inject your authentication service here
public nhanviens:NhanVien[];
  manv: string;
  matkhau:string;
  @ViewChild('manvInput') manvInput: ElementRef;
  @ViewChild('matkhauInput') matkhauInput: ElementRef;

  loginn() {
     this.manv = this.manvInput.nativeElement.value;
     this.matkhau = this.matkhauInput.nativeElement.value;

     this.nhanvienService.getNV(this.manv,this.matkhau).subscribe(
    (response:NhanVien[])=>{
            console.log(response);
            if(response.length>0) {
          console.log('Đăng nhập thành công');
          alert('Đăng nhập Thành công');
          this.router.navigate(['/product'])
      }else{
          this.errorMessage = 'Đăng nhập thất bại';
          alert(this.errorMessage);
      }

    },(error:HttpErrorResponse)=>{
        alert(error.message);
      });
  }


  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }
}
