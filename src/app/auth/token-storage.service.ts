import { Injectable } from '@angular/core';
import { AppConstants } from '../../app-constants';


const TOKEN_PREFIX = 'Bearer ';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];

  constructor(private constants: AppConstants) { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(this.constants.jwtTokenKey);
    window.sessionStorage.setItem(this.constants.jwtTokenKey, token);
  }

  public getToken(): string {
    const token = sessionStorage.getItem(this.constants.jwtTokenKey);
    return token ? TOKEN_PREFIX.concat(token) : '';
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(this.constants.usernameKey);
    window.sessionStorage.setItem(this.constants.usernameKey, username);
  }

  public getUsername(): string {
    const username = sessionStorage.getItem(this.constants.usernameKey);
    return username ? username : '';
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(this.constants.authoritiesKey);
    window.sessionStorage.setItem(this.constants.authoritiesKey, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    const authorities = sessionStorage.getItem(this.constants.authoritiesKey);

    if (sessionStorage.getItem(this.constants.jwtTokenKey) && authorities) {
      JSON.parse(authorities).forEach((autority: { 'authority': string }) => {
        this.roles.push(autority['authority']);
      });
    }

    return this.roles;
  }
}