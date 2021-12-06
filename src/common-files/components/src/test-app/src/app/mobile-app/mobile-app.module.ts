import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BasePageComponent } from './pages/base-page/base-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

@NgModule({
  declarations: [
    BasePageComponent,
    TestPageComponent,
  ],
  imports: [
    RouterModule,
  ],
  providers: [],
})
export class MobileAppModule { }
