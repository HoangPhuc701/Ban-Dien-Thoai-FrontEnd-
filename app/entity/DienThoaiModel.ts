import {DienThoai} from "./dienthoai";

export class DienThoaiModel implements DienThoai {
  maDienThoai: string = '';
  tenDienThoai: string = '';
  thongTinDienThoai: string = '';
  hinhAnh: string = '';
  dungLuong: string = '';
  soLuong: number = 0;
  giaBan: number = 0;
  maNCC: string = '';
  maCuaHang: string = '';
}
