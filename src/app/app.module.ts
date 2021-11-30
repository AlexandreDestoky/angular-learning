import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardComponent } from './card/card.component';


// import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    CardlistComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    // AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
