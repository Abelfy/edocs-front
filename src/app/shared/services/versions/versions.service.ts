import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersionsService {

  constructor(private http : HttpClient) { }
  
  fetchVersions(id : number) {
    return this.http.get<any>(`api/softwares/${id}/versions/`);
  }
}
