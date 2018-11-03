import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = true;

  constructor() {}

  isLoggedIn() {
    return this._isLoggedIn;
  }

  login() {
    this._isLoggedIn = true;
  }

  logout() {
    this._isLoggedIn = false;
  }
}
