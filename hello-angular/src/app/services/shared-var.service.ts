import { Injectable } from '@angular/core';

interface User {
  name: string;
  surname: string;
  isAuthorized: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SharedVarService {
  private _response = '';

  user: User = {
    name: 'John',
    surname: 'Smith',
    isAuthorized: false,
  };

  constructor() {
    this._response = 'Hello';
  }

  get actor(): string {
    return this._response;
  }

  set actor(newActor: string) {
    if (newActor.length > 0) {
      this._response = newActor;
    }
  }
}
