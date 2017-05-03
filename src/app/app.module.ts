import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AllInlineModule } from './all-inline/all-inline.module';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { InlineTemplateModule } from './inline-template/inline-template.module';
import { StandardComponentModule } from './standard-component/standard-component.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AllInlineModule,
    InlineStyleModule,
    InlineTemplateModule,
    StandardComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
