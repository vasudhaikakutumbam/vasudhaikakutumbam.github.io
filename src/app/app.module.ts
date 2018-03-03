import { CHARITY_APP_ROUTES } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppCommonModule } from './charity-app/app-common/app-common.module';
import { HomeModule } from './charity-app/home/home.module';
import { CausesModule } from './charity-app/causes/causes.module';
import { AboutModule } from './charity-app/about/about.module'
import { ContactModule } from './charity-app/contact/contact.module';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './charity-app/services/in-memory-data.service';
import { NeedsService } from './charity-app/services/needs.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CHARITY_APP_ROUTES,
    BrowserModule,
    AppCommonModule,
    HomeModule,
    
    AboutModule,
    ContactModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CausesModule
  ],
  providers: [NeedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
