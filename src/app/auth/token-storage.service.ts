import { Injectable } from '@angular/core';
import { AUTHORITIES_KEY, JWT_TOKEN_KEY, USERNAME_KEY } from 'src/env.consts';

const TOKEN_PREFIX = 'Bearer ';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(JWT_TOKEN_KEY);
    window.sessionStorage.setItem(JWT_TOKEN_KEY, token);
  }

  public getToken(): string {
    const token = sessionStorage.getItem(JWT_TOKEN_KEY);
    return token ? TOKEN_PREFIX.concat(token) : '';
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    const username = sessionStorage.getItem(USERNAME_KEY);
    return username ? username : '';
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    const authorities = sessionStorage.getItem(AUTHORITIES_KEY);

    if (sessionStorage.getItem(JWT_TOKEN_KEY) && authorities) {
      JSON.parse(authorities).forEach((autority: {'authority':string}) => {
        this.roles.push(autority['authority']);
      });
    }

    return this.roles;
  }
}