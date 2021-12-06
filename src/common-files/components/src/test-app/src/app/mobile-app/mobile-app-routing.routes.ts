import { Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { BasePageComponent } from './pages/base-page/base-page.component';

export const MobileAppRoutingRoutes: Routes = [
  {
    path: '',
    component: BasePageComponent,
  },
  {
    path: 'test-page',
    component: TestPageComponent,
  },
];
