import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OfferComponent } from './offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferCreateComponent } from './offer-create/offer-create.component';

@NgModule({
  declarations: [
    OfferComponent,
    OfferListComponent,
    OfferCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [OfferComponent]
})
export class OfferModule { }
