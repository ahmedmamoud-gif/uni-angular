import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import { Router } from "@angular/router"
import { BackendCallsService } from '../backend-calls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: any = ""
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });
  submit = false;


  constructor(private auth: BackendCallsService, private router: Router) {   }

  ngOnInit(): void {
  }



  handleSubmit() {
    this.submit = true;
    if (this.loginForm.valid) {
      this.auth.Post("/api/auth/signin", this.loginForm.value).subscribe(res => {
        localStorage.setItem("name", res.username);
        localStorage.setItem("accessToken", res.accessToken);
          this.auth.isLogin = true;
          this.router.navigateByUrl("");
        }, err => {
          this.errorMsg = err.error.message;
        })
    }
  }

  get data() { return this.loginForm.controls; };
}
