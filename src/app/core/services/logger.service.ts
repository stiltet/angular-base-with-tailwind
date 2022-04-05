import { Injectable } from '@angular/core';
import { environment } from '@core/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  dir(title: any, msg: any = undefined) {
    if (environment.production) return;
    !!msg ? console.dir(title, msg) : console.dir(title);
  }
  log(title: any, msg: any = undefined) {
    if (environment.production) return;
    !!msg ? console.log(title, msg) : console.log(title);
  }
  info(title: any, msg: any = undefined) {
    if (environment.production) return;
    !!msg ? console.info(title, msg) : console.info(title);
  }
  error(title: any, msg: any = undefined) {
    !!msg ? console.error(title, msg) : console.error(title);
  }
  warn(title: any, msg: any = undefined) {
    !!msg ? console.warn(title, msg) : console.warn(title);
  }
}
