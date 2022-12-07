import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  defaultSubs: string = 'Advanced';

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('email: ', this.signupForm.value.email);
    console.log('password: ', this.signupForm.value.password);
    console.log('subscription: ', this.signupForm.value.subscription);
  }
}
