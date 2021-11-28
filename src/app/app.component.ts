import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { contactForm } from './contactForm.modele';
import { country } from './country.modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  contact: contactForm;

  ngOnInit() {
    this.contact = {
      firstname: 'Sachin',
      lastname: 'Tendulkar',
      email: 'sachin@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: { city: 'Mumbai', street: 'Perry Cross Rd', pincode: '400050' },
    };
  }

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];

  onSubmit(form : NgForm) {
    console.log(form.value);
    console.log('----');
    form.resetForm();
  }
}
