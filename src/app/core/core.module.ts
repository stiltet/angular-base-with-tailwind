import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendService } from './services/backend.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [BackendService, LoggerService],
})
export class CoreModule {}
