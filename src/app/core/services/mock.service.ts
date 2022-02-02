import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient, private logger: LoggerService) {}

  private generateBase64FileNameFromEndpointUrl(endpoint: string) {
    return btoa(endpoint);
  }

  public get(endpoint: string): Observable<any> {
    const base64Endpoint: string = this.generateBase64FileNameFromEndpointUrl(endpoint);

    this.logger.info(`Calling mock GET to: ${endpoint} using filename: "${base64Endpoint}"`);

    return this.http.get(`mocks/${base64Endpoint}.json`);
  }

  public post(endpoint: string, data = {}): Observable<any> {
    const base64Endpoint: string = this.generateBase64FileNameFromEndpointUrl(endpoint);

    this.logger.info(`Calling mock POST to: ${endpoint} using filename: "${base64Endpoint}"`);

    return this.http.get(`mocks/${base64Endpoint}.json`);
  }
}
