import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(title: any, msg: any = undefined) {
    !!msg ? console.log(title, msg) : console.log(title);
  }
  info(title: any, msg: any = undefined) {
    !!msg ? console.info(title, msg) : console.info(title);
  }
  error(title: any, msg: any = undefined) {
    !!msg ? console.error(title, msg) : console.error(title);
  }
  warn(title: any, msg: any = undefined) {
    !!msg ? console.warn(title, msg) : console.warn(title);
  }
}
