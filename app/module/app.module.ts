import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from '../component/app.component';
import {DienthoaiService} from "../service/dienthoai.service";
// import { NavigationComponent} from "../component/nav";
import {LoginComponent} from "../component/login";
import {AppComponent} from "../component/nav";
import {NavigationComponent} from "../component/app.component";
import {RouterModule, Routes} from "@angular/router";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ProductComponent} from "../component/product";
import {FormsModule} from "@angular/forms";
import {DonHangComponent} from "../component/donhang.component";
import {GiohangComponent} from "../component/giohang.component";
import {ChitietComponent} from "../component/chitiet.component";
import {LoadingComponent} from "../component/loading";
import {ManagerComponent} from "../component/manager.component";
import {QuanlykhachhangComponent} from "../component/quanlykhachhang.component";
import {QuanlydonhangComponent} from "../component/quanlydonhang.component";

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'',component:NavigationComponent},
  {path:'lichsu',component:DonHangComponent},
  {path:'giohang',component:GiohangComponent},
  {path:'chitiet',component:ChitietComponent},
  {path:'manager',component:ManagerComponent},
  {path:'product',component:ProductComponent},
  {path:'qlkhachhang',component:QuanlykhachhangComponent},
  {path:'qldonhang',component:QuanlydonhangComponent}
];
@NgModule({
  declarations: [
    AppComponent,NavigationComponent,LoginComponent,ProductComponent,DonHangComponent,
    GiohangComponent,ChitietComponent,LoadingComponent,ManagerComponent,QuanlykhachhangComponent,QuanlydonhangComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    FormsModule
  ],
  providers: [DienthoaiService],
  bootstrap: [AppComponent,NavigationComponent,LoginComponent ],
  //exports: [RouterModule]
})
export class AppModule { }
//export class AppRoutingModule { }
