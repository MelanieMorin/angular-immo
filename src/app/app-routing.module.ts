import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { OfferComponent } from './offer/offer.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OfferListComponent } from './offer/offer-list/offer-list.component';
import { OfferCreateComponent } from './offer/offer-create/offer-create.component';

const routes: Routes = [
  {
    path:'owner',
    children: [
      {path: 'list', component: OwnerListComponent},
      {path: 'create', component: OwnerCreateComponent},
    ]
  },
  {
    path:'offer',
    children: [
      {path: 'list', component: OfferListComponent},
      {path: 'create', component: OfferCreateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
