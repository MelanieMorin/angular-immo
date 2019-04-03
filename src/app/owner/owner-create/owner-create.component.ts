import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Owner } from '../../models/owner';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss'],
  providers: [OwnerService]
})
export class OwnerCreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private ownerService: OwnerService
  )
  {  }

  ownerForm = this.fb.group(
    {
      lastName: [
        '',
        Validators.required
      ],
      firstName: [
        '',
        Validators.required
      ],
      birth: [
        '',
        Validators.required
      ],
      address: [
        '',
        Validators.required
      ],
      postalCode: [
        '',
        Validators.required
      ],
      city: [
        '',
        Validators.required
      ],
    }
  );

  submit(): void {
    this.ownerService.add(this.ownerForm.value);
  }

  ngOnInit() {
  }

}
