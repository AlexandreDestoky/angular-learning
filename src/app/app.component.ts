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
  defaultQuestion = 'teacher';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted= false;

  ngOnInit() {}

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.valeurForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  affiche() {
    console.log(this.valeurForm.value);
    this.submitted = true;
    this.user.username = this.valeurForm.value.userData.username;
    this.user.email = this.valeurForm.value.userData.email;
    this.user.secretQuestion = this.valeurForm.value.question;
    this.user.answer = this.valeurForm.value.questionAnswer;
    this.user.gender = this.valeurForm.value.gender;
  }
}
