import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { CommonService } from "../services/common.service";

@Injectable()
export class ReqInterceptor implements HttpInterceptor {

  constructor(
    private commonService: CommonService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.commonService.makeLoading(false);
        this.commonService.makeError(true);
        return throwError(() => {
          new Error(error.message);
        })
      })
    )
  }

}
