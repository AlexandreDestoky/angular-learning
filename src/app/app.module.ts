import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { AbbrevPipe } from './abbrev.pipe';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';



@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    AbbrevPipe,
    CockpitComponent,
    ServerElementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
