import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { LoadingService } from "../services/loading.service";

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor(private loader: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }
}
