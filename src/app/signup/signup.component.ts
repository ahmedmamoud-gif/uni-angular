import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { BackendCallsService } from '../backend-calls.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    confirmPassword: new FormControl("", Validators.required)
  });
  errorMsg: String = "";
  submit: boolean = false;
  constructor(private auth: BackendCallsService, private router: Router) {
  }

  ngOnInit(): void {
  }
  Submit() {
    this.submit = true;
    if (this.registerForm.valid) {
      if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
        this.errorMsg = 'Passwords Does Not Match'
        return;
      }
      this.auth.Post("/api/auth/signup", this.registerForm.value).subscribe(res => {
        this.router.navigateByUrl("login");
      },
        (err) => {
         this.errorMsg = err.message;
      })
    }
  }
  get data() { return this.registerForm.controls; };

}
