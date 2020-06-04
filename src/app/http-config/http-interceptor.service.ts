import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(public errorDialogService: ErrorHandlingService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if we have authorization token with login credentails we use below commeted code to inject access token to all the api calls

    // if (!request.headers.has('Content-Type')) {
    //   console.log('request', request)
    //   request = request.clone({
    //     headers: request.headers.set('Content-Type', 'application/json')
    //         .set('Authorization', `Bearer ${sessionStorage.getItem('authToken')}`);
    //   });
    // }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        this.errorDialogService.openDialog(data);
        return throwError(error);
      }));
  }
}
