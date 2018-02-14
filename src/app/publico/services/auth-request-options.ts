
import { Headers, Http, BaseRequestOptions } from '@angular/http';
import { TOKEN_NAME } from '../../publico/services/autenticacion.service';

export class AuthRequestOptions extends BaseRequestOptions {

  constructor() {
    super();

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      this.headers.append('x-access-token', chasker.token);
    }
  }

}
