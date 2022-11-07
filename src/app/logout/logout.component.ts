import { Component, OnInit } from '@angular/core';
import { JWT_TOKEN_KEY, USERNAME_KEY, AUTHORITIES_KEY } from 'src/env.consts';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
    window.sessionStorage.removeItem(JWT_TOKEN_KEY);
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
  }
}