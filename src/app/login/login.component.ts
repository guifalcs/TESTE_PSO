import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: FormGroup;

  constructor(private fb: FormBuilder) {
    this.login = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  fazerLogin(){
  }

  cadastrar(){
  }

}
