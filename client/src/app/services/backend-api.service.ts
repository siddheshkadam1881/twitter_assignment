import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  baseUrl = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  postService(path, form_data) {
    console.log("form_data", form_data)
    // let body = JSON.stringify(form_data);
    return this.http.post(this.baseUrl + path, form_data, httpOptions);
  }

  getService(path) {
    
    return this.http.get(this.baseUrl + path, httpOptions);
  }
}
