import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn: boolean = false;
  public redirectUrl: string="";

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router) {
    this.isLoggedIn = !!this.tokenStorage.getToken();
  }

  login (username: string, password: string){
    return this.http.post<string>("https://localhost:7203/api/Login/login",{username,password});
  }

  logout(): void {
    this.tokenStorage.signOut();
  }
}
