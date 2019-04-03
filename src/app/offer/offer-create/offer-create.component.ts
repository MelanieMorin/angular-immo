import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Offer } from '../../models/offer';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer-create',
  templateUrl: './offer-create.component.html',
  styleUrls: ['./offer-create.component.scss'],
  providers: [OfferService]
})
export class OfferCreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private offerService: OfferService
  )
  {  }

  offerForm = this.fb.group(
    {
      title: [
        '',
        Validators.required
      ],
      description: [
        '',
        Validators.required
      ],
      surface: [
        '',
        Validators.required
      ],
      price: [
        '',
        Validators.required
      ],
      owner: [
        '',
        Validators.required
      ],
      ref: [
        '',
        Validators.required
      ],
      photo: [
      ],
      address: [
      ],
      address2: [
      ],
      postalCode: [
      ],
      city: [
      ],
      area: [
      ],
      nearby: [
      ],
      latitude: [
      ],
      longitude: [
      ]
    }
  );

  submit(): void {
    this.offerService.add(this.offerForm.value);
  }

  ngOnInit() {
  }

}
