import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { DemoPage } from './pages/demo/demo.page';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, AboutComponent, ResponsiveComponent, DemoPage],
  exports: [HomeComponent, AboutComponent, ResponsiveComponent],
})
export class SharedModule {}
