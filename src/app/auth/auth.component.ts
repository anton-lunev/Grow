import { Component, OnInit } from '@angular/core';
import { AuthService } from './state/auth.service';

@Component({
  selector: 'grow-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.googleLogin();
  }
}
