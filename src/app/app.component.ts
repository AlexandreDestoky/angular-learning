import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild("formulaire") ValeurForm;
  constructor() {}
  ngOnInit() {
  }
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  // }

  affiche() {
    console.log(this.ValeurForm.value)
    console.log(this.ValeurForm)
  }
  defaultQuestion = "pet";

}
