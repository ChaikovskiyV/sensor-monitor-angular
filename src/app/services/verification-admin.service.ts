import { Injectable } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationAdminService {

  constructor(private tokenStorage: TokenStorageService) { }

  public isAdmin(): boolean {
    let authorities: string[] = this.tokenStorage.getAuthorities();
    console.log(authorities);
    return authorities.some(auth => auth.indexOf('ADMIN', 0) >= 0);
  }
}