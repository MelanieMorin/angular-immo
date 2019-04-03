import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    OwnerComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    OwnerRoutingModule
  ],
  providers: [],
  bootstrap: [OwnerComponent]
})
export class AppModule { }
