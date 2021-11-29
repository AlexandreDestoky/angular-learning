import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('formulaire') valeurForm: NgForm;

  genders = ['male', 'femme'];
  constructor() {}
  ngOnInit() {}
  suggestUserName() {
    console.log("ça marche !")
    const suggestedName = 'Superuser';
    this.valeurForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    })
    // this.valeurForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email:""
    //   },
    //   question:"",
    //   questionAnswer:'',
    //   gender:"male"
    // })

  }

  affiche() {
    console.log(this.valeurForm.value);
    console.log(this.valeurForm);
  }
  defaultQuestion = 'teacher';
}
