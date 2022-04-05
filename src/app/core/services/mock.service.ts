import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/environments/environment';
import { LoggerService } from '@core/services/logger.service';
import { kebabCase } from 'lodash';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({ providedIn: 'root' })
export class BackendService {
  mockFakeTimeoutInMs: number = 2000;
  constructor(private http: HttpClient, private logger: LoggerService) {}

  private generateBase64FileNameFromEndpointUrl(endpoint: string) {
    return btoa(endpoint);
  }

  private getEndpointModuleName(endpoint: string): string | null {
    let endpointModuleName: string | null = null;
    Object.keys(environment.apiEndpointsPerModule).forEach((module) => {
      if (
        Object.values(
          environment.apiEndpointsPerModule[
            module as keyof typeof environment.apiEndpointsPerModule
          ]
        ).indexOf(endpoint) > -1
      ) {
        endpointModuleName = kebabCase(module);
      }
    });
    return endpointModuleName;
  }
  private getEndpointUri(endpointModuleName: string | null, base64Endpoint: string): string {
    return endpointModuleName
      ? `mocks/${endpointModuleName}/${base64Endpoint}.json`
      : `mocks/${base64Endpoint}.json`;
  }
  public get(endpoint: string): Observable<any> {
    // if ([].includes(endpoint)) {  //  return this.getReal(endpoint);  // }
    const base64Endpoint = this.generateBase64FileNameFromEndpointUrl(endpoint);
    const endpointModuleName = this.getEndpointModuleName(endpoint);
    const endpointUri = this.getEndpointUri(endpointModuleName, base64Endpoint);
    this.logger.info(
      `Calling mock GET to: ${endpoint} using module: "${endpointModuleName}" and filename: "${base64Endpoint}"`
    );
    return this.http.get(endpointUri).pipe(delay(this.mockFakeTimeoutInMs)); //.pipe((response) => convertObjectTimestampsToDayJs(response));
  }

  // public getReal(endpoint: string, params?: { key: string; value: string }): Observable<any> {
  //  this.logger.info(`Calling GET to: ${endpoint}`);
  //  return this.http.get(endpoint);
  // }

  public post(endpoint: string, payload = {}): Observable<any> {
    const base64Endpoint = this.generateBase64FileNameFromEndpointUrl(endpoint);
    const endpointModuleName = this.getEndpointModuleName(endpoint);
    const endpointUri = this.getEndpointUri(endpointModuleName, base64Endpoint);
    this.logger.info(
      `Calling mock POST to: ${endpoint} using module: "${endpointModuleName}" and filename: "${base64Endpoint}"`
    );
    return this.http.get(endpointUri).pipe(delay(this.mockFakeTimeoutInMs));
  }

  // public postReal(endpoint: string, payload = {}): Observable<any> {
  //  this.logger.info(`Calling POST to: ${endpoint} with data: ${payload}`);
  //  return this.http.post(endpoint, payload);
  // }
}
