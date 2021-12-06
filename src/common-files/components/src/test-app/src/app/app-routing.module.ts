import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectModePageComponent } from '../pages/select-mode/select-mode-page.component';
import { MobileAppRoutingRoutes } from './mobile-app/mobile-app-routing.routes';
import { WebAppRoutingRoutes } from './web-app/web-app-routing.routes';

const routes: Routes = [
  {
    path: '',
    component: SelectModePageComponent,
  },
  {
    path: 'web',
    children: WebAppRoutingRoutes,
  },
  {
    path: 'mobile',
    children: MobileAppRoutingRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
