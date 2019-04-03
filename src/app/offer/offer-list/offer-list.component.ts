import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss'],
  providers: [OfferService]
})
export class OfferListComponent implements OnInit {

  offers:Offer[];
  defaults: Offer[];
  keywords:string = '';

  constructor(private offerService: OfferService) {
    this.offers = this.offerService.getAll();
    this.defaults = this.offers;
  }

  /*search() {

    this.offers = this.defaults;

    this.offers = this.offers.filter(offer =>
      offer.getFullAddress().indexOf(
        this.keywords.toUpperCase()
      ) != -1
    );
  }*/

  ngOnInit() {
  }

}
