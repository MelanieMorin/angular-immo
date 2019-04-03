import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OwnerComponent } from './owner.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';

@NgModule({
  declarations: [
    OwnerComponent,
    OwnerListComponent,
    OwnerCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [OwnerComponent]
})
export class AppModule { }
