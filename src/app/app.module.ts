import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  SocialLoginModule,
    AuthServiceConfig,
    LinkedinLoginProvider
} from 'angular5-social-auth';
import { SigninComponent } from './signin/signin.component';

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
         {
          id: LinkedinLoginProvider.PROVIDER_ID,
          provider: new LinkedinLoginProvider('7799f7ipemwu2d')
        },
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
