import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  constructor() {}

  getBaseURL() {
    return 'http://localhost:3000';
  }
}
