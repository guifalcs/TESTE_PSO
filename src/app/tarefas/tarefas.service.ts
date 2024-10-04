import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarefasService {

  private apiUrl = 'http://localhost:8081/tasks';

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
