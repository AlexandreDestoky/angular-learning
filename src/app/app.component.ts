import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { contactFormulaire } from './contactFormulaire.modele';
import { country } from './country.modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  contactForm;
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      }),
    });
  }
  // contact: contactForm;

  // ngOnInit() {
  //   this.contact = {
  //     firstname: 'Sachin',
  //     lastname: 'Tendulkar',
  //     email: 'sachin@gmail.com',
  //     gender: 'male',
  //     isMarried: true,
  //     country: '2',
  //     address: { city: 'Mumbai', street: 'Perry Cross Rd', pincode: '400050' },
  //   };
  // }

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];

  // onSubmit(form : NgForm) {
  //   console.log(form.value);
  //   console.log('----');
  //   form.resetForm();
  // }

  // contactForm = new FormGroup({
  //   firstname: new FormControl("jean"),
  //   lastname: new FormControl("",[Validators.required,Validators.minLength(10)]),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl(),
  // });


  onSubmitReactive() {
    console.log(this.contactForm.value);
  }
}
