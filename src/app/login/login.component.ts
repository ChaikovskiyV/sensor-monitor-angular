import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AuthLoginInfo } from "../auth/auth-login-info";
import { TokenStorageService } from '../auth/token-storage.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFaild = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo!: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }    
  }

  onSubmit() {    
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe({
      next: (data) => {
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.roles);

        this.isLoginFaild = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigate(['/sensors']);     
      },
      error: (error) => {
          console.log(error);
          if(error.statusText === 'Unknown Error') {
            this.errorMessage = "There is no connection to the server.";
          }
        this.errorMessage = error.error.errorMessage;
        this.isLoginFaild = true;        
      }
    }
    )
  }

  cleanError() {
    this.errorMessage = '';
  }
}