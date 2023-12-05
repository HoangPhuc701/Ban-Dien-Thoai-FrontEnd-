import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DienThoai} from "../entity/dienthoai";


@Injectable({providedIn:'root'})

export class DienthoaiService{
  private apiServerUrl='http://localhost:8080/backend-1.0-SNAPSHOT/api/dienthoai';
  constructor(private http: HttpClient) { }
  public getDienThoai():Observable<DienThoai[]>{
    return this.http.get<DienThoai[]>(`${this.apiServerUrl}`);
  }
  public addDienThoai(dienthoai:DienThoai):Observable<DienThoai>{
    return this.http.post<DienThoai>(`${this.apiServerUrl}`,dienthoai);
  }
}
