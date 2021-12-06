import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MobileAppModule } from './mobile-app/mobile-app.module';
import { WebAppModule } from './web-app/web-app.module';
import { SelectModePageComponent } from '../pages/select-mode/select-mode-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SelectModePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebAppModule,
    MobileAppModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
