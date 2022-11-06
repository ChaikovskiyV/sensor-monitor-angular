import { Component, OnInit } from '@angular/core';
import { JWT_TOKEN_KEY, USER_NAME_KEY, USER_ROLE_KEY } from 'src/env.consts';

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
    window.localStorage.removeItem(JWT_TOKEN_KEY);
    window.localStorage.removeItem(USER_NAME_KEY);
    window.localStorage.removeItem(USER_ROLE_KEY);
  }
}