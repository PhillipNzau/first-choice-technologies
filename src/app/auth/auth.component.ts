import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]],
  });

  constructor(
    private fb: UntypedFormBuilder,
   
  ) {
  }

  loginUser() {
    const loginData = {
      ...this.loginForm.value
    }
  }


}
