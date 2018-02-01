
import { Headers, Http, BaseRequestOptions } from '@angular/http';
import { TOKEN_NAME } from '../../publico/services/autenticacion.service';

export class AuthRequestOptions extends BaseRequestOptions {

  constructor() {
    super();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      this.headers.append('x-access-token', currentUser.token);
    }
  }

}
