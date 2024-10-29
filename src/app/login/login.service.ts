import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiKey;

  constructor(private http: HttpClient) {}

  cadastrar(nome: string, senha: string): Observable<any> {
    return this.http.post(this.apiUrl + '/cadastrar', {
      nome,
      senha,
    });
  }

  logar(nome: string, senha: string): Observable<any> {
    return this.http.post(this.apiUrl + '/login', {
      nome,
      senha
    });
  }
}
