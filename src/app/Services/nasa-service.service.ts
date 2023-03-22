import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaServiceService {

  constructor( private _http: HttpClient ) { }

  getApiData(urlApi: string){
    return this._http.get(urlApi);
  }

  getImagePlanet(){

  }
}
