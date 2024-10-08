import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarefasService {

  private apiUrl = environment.apiKey;

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addTarefas(tarefa: any): Observable<any> {
    return this.http.post(this.apiUrl, tarefa);
  }

  deleteTarefas(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editarTarefas(id: number, tarefa: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, tarefa);
  }
}
