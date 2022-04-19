import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BillingInfoUnnestedComponent } from './billing-info-unnested/billing-info-unnested.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AddressComponent } from './address/address.component';
import { AddressInfoComponent } from './address-info/address-info.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, BillingInfoUnnestedComponent, BasicInfoComponent, AddressComponent, AddressInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
