import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '@shared/components/about/about.component';
import { HomeComponent } from '@shared/components/home/home.component';
import { ResponsiveComponent } from '@shared/components/responsive/responsive.component';
import { DemoPage } from '@shared/pages/demo/demo.page';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'demo', component: DemoPage, data: { title: 'DEMO' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'responsive', component: ResponsiveComponent, data: { title: 'Responsive' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
