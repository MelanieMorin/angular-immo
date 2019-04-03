import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  {
    path:'owner',
    component:OwnerComponent
  },
  {
    path:'offer',
    component:OfferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
