import { Component, OnInit } from '@angular/core';
import { JWT_TOKEN_KEY, USERNAME_KEY, AUTHORITIES_KEY } from 'src/env.consts';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}