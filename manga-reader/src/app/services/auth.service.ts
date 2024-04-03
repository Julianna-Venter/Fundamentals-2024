import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  get isLoggedInState() {
    return this.isLoggedIn;
  }

  set isLoggedInState(newState: boolean) {
    this.isLoggedIn = newState;
  }
}
