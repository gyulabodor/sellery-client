import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginModel} from '../login.model'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit{

  @Output() authenticated$ = new EventEmitter(false)

  loginForm: FormGroup = this.formBuilder.group({
    emailInput: ['', [Validators.required,Validators.email]],
    passwordInput: ['', [Validators.required, Validators.minLength(6)]],
  })
  constructor(private formBuilder: FormBuilder,) {}

  ngOnInit(): void {

  }

  submitLogin() {

  }

}
