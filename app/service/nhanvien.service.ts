import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginComponent} from "../component/login";
import {NhanVien} from "../entity/nhanvien";

@Injectable({providedIn:'root'})

export class NhanVienService{
  private apiServerUrl='http://localhost:8080/backend-1.0-SNAPSHOT/api';
  constructor(private http: HttpClient,private router:Router) { }

  // khachhangLogin(data:LoginComponent){
  //   this.http.get<Khachhang[]>('http://localhost:8080/backend-1.0-SNAPSHOT/api/khachhang?sdtKH=${data.username}&matKhau=${data.password}',
  //     {observe:'response'})
  //     .subscribe((result)=>{
  //       if(result){
  //         console.warn(result);
  //       }
  //     })
  // }
  // khachhangSignUp(khachhang:LoginComponent){
  //   this.http.post('http://localhost:8080/backend-1.0-SNAPSHOT/api/khachhang',sdtKH,{observe:'response'})
  //     .subscribe((result)=>{
  //       if(result){
  //         localStorage.setItem('sdtKH',JSON.stringify(result.body));
  //         this.router.navigate(['/']);
  //       }
  //     })
  // }
  // public getKhachhang(data:LoginComponent):Observable<Khachhang[]>{
  //    return this.http.get<Khachhang[]>(`${this.apiServerUrl}/khachhang?sdtKH=${data.username}&matKhau=${data.password}`);
  //   // return this.http.get<Khachhang[]>(`${this.apiServerUrl}/khachhang?sdtKH=123456789&matKhau=12345678`);
  // }
  // public getKhachhang():Observable<Khachhang[]>{
  //   return this.http.get<Khachhang[]>(`${this.apiServerUrl}/khachhang`);
  //   // return this.http.get<Khachhang[]>(`${this.apiServerUrl}/khachhang?sdtKH=123456789&matKhau=12345678`);
  // }

  getNV(manv:string,matkhau:string):Observable<NhanVien[]>{
    return this.http.get<NhanVien[]>(`${this.apiServerUrl}/nhanvien?manv=${manv}&matKhau=${matkhau}`);
  }
}
