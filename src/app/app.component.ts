import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm : FormGroup
  ajd = new Date();
  texteTest = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem
  inventore laboriosam tenetur, adipisci rerum doloremque vero, libero delectus
  suscipit soluta excepturi blanditiis maxime perspiciatis cupiditate esse
  architecto in officiis. Voluptatum eum delectus, sunt ex quis rem laboriosam
  aspernatur, reprehenderit asperiores ea quidem numquam magni deserunt
  molestiae similique amet soluta in laborum quo quisquam exercitationem illo!
  Omnis enim recusandae sunt laudantium nisi voluptate placeat non accusantium
  libero rem, explicabo consequatur ea earum quia, reiciendis in inventore et
  perferendis, cumque temporibus animi? Modi dolorem aliquam est reprehenderit,
  alias soluta itaque omnis veniam eius, perspiciatis obcaecati voluptates
  quidem architecto, minima exercitationem deserunt.`
  
  
  ngOnInit() {
    this.signupForm= new FormGroup({
      userData:new FormGroup({
        username: new FormControl("",Validators.required),
        email:new FormControl(null,[Validators.required,Validators.email]),
      }),
      gender:new FormControl("male"),
      hobbies:new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.signupForm)
    console.log(this.signupForm.value);
  }

  onAddHobby() {
    console.log("se lance")
    const control = new FormControl("",Validators.required);
    (this.signupForm.get("hobbies") as FormArray).push(control);
    console.log(this.signupForm.value)
  }
  
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
