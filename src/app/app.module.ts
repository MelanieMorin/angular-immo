import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
import { OfferComponent } from './offer/offer.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OfferCreateComponent } from './offer/offer-create/offer-create.component';
import { OfferListComponent } from './offer/offer-list/offer-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    OfferComponent,
    OwnerCreateComponent,
    OwnerListComponent,
    OfferCreateComponent,
    OfferListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
