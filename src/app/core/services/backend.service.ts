import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient, private logger: LoggerService) {}

  public get(endpoint: string): Observable<any> {
    this.logger.info(`Calling GET to: ${endpoint}`);

    return this.http.get(endpoint);
  }

  public post(endpoint: string, data = {}): Observable<any> {
    this.logger.info(`Calling POST to: ${endpoint} with data: ${data}`);

    return this.http.post(endpoint, data);
  }
}
