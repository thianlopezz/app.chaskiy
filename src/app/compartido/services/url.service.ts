import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  env = environment;

  constructor() {}

  getBaseURL() {
    return this.env.chaskiy_api_url;
  }
}
