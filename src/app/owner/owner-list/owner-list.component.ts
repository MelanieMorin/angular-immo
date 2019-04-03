import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../models/owner';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  owners:Owner[];
  defaults: Owner[];
  keywords:string = '';

  constructor(private ownerService: OwnerService) {
    this.owners = this.ownerService.getAll();
    this.defaults = this.owners;
  }

  ngOnInit() {
    
  }

  
  delete(owner:Owner): void{
    this.ownerService.remove(owner);
  }

  search() {

    this.owners = this.defaults;

    this.owners = this.owners.filter(owner =>
      owner.getFullName().indexOf(
        this.keywords.toUpperCase()
      ) != -1
    );
  }

}
