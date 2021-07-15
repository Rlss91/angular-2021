import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (token) {
      const tokenReq = req.clone({
        headers: req.headers.append('token', token),
      });
      return next.handle(tokenReq);
    } else {
      return next.handle(req);
    }
  }
}
