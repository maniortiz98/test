import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api, ApiPoket } from '../config'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public api:String = Api.url
  public apiPoket:String = ApiPoket.url

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(`${this.api}categories.json`)
  }
  getDataPoketcate(){
    return this.http.get(`${this.apiPoket}pokemon`)
  }
  getDataPoketinformation(num:any){
    return this.http.get(`${this.apiPoket}pokemon/${num}`)
  }
  getDataPokedext(){
    return this.http.get(`${this.apiPoket}pokemon/34/`)
  }
  getDataPoketability(num:any){
    return this.http.get(`${this.apiPoket}ability/${num}`)
  }

}
