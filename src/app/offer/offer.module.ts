import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    OfferComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    OfferRoutingModule
  ],
  providers: [],
  bootstrap: [OfferComponent]
})
export class OfferModule { }
