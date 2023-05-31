import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { IProducts } from "../models/products";
import { ErrorService } from "./error.serviece";

@Injectable({
  providedIn: "root",
})
export class ProductServis  {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    ) {
  };

  getAll(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>("https://fakestoreapi.com/products").pipe(
      catchError((error: HttpErrorResponse) => this.errorHandler(error))
    );
  };

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  };
};
