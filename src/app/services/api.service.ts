import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllData() {
    let url = 'http://localhost:3000';
    return this.http.get(url);
  }

  public deleteRowByEventId(eventId) {
    let url = 'http://localhost:3000/delete/' + eventId;
    return this.http.delete(url);
  }

  public editRow(payload) {
    let url = 'http://localhost:3000';
    return this.http.put(url,payload);
  }

  public addRow(payload) {
    let url = 'http://localhost:3000';
    return this.http.post(url,payload);
  }
  
}
