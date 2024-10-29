import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  token;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      nome: [''],
      senha: [''],
    });
  }

  fazerLogin() {}

  cadastrar(nome: string, senha: string) {
    if (!nome || !senha) {
      alert('Preencha todos os campos!');
    } else {
      this.loginService.cadastrar(nome, senha).subscribe(
        (data) => {
          alert(
            'Usúario cadastrado com sucesso! Você já pode fazer login para acessar sua lista de tarefas'
          );
        },
        () => {
          alert('Erro ao cadastrar usuário');
        }
      );
      this.loginForm.reset();
    }
  }
}
