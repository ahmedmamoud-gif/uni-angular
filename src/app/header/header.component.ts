import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BackendCallsService } from '../backend-calls.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public auth: BackendCallsService, private router: Router) {
    this.auth.isLogin = localStorage.getItem("accessToken") ? true : false;
  }

  ngOnInit(): void {

  }
  Logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("name");
    this.auth.isLogin = false;
    this.router.navigateByUrl("");
  }
}
