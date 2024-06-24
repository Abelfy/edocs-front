import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionnalitiesService {

  constructor(private http : HttpClient) { }
  
  fetchSoftwares() {
    return this.http.get<any>('api/softwares/1/versions/3/functionnalities');
  }
}
