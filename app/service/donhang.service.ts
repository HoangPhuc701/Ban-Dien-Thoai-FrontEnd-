import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {DienThoai} from "../entity/dienthoai";
import {Donhang} from "../entity/donhang";

@Injectable({
  providedIn: 'root'
})
export class DonHangService {
  private apiUrl = 'http://localhost:8080/backend-1.0-SNAPSHOT/api/donhang';

  constructor(private http: HttpClient) { }

  // getDonHang(sdtKH: number) {
  //   return this.http.get(`${this.apiUrl}?sdtKH=${sdtKH}`);
  // }
     getDonHang(sdtKH:number):Observable<Donhang[]>{
        return this.http.get<Donhang[]>(`${this.apiUrl}?sdtKH=${sdtKH}`);
    }
    QuanLyDonHang(ngaylapdon:string):Observable<Donhang[]>{
      return this.http.get<Donhang[]>(`http://localhost:8080/backend-1.0-SNAPSHOT/api/qldonhang?ngaylapdon=${ngaylapdon}`);
    }

}
