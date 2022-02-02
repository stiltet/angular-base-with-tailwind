import { Component, OnInit } from '@angular/core';

import { BackendService } from '@core/services/backend.service';
import { LoggerService } from '@core/services/logger.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private logger: LoggerService, private http: BackendService) {}

  ngOnInit(): void {
    this.http.post('http://date.jsontest.com/').subscribe((data) => {
      this.logger.info(data);
    });
  }
}
