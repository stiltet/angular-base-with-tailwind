import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, AboutComponent, ResponsiveComponent],
  exports: [HomeComponent, AboutComponent, ResponsiveComponent],
})
export class SharedModule {}
