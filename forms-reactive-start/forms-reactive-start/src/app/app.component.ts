import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup ;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, 
            [Validators.required, Validators.email],
            this.forbiddenEmails),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

   this.signupForm.setValue({
    'userData':{
      'username': 'Gabriela',
      'email': 'gab@gmail.com',
    },
    'gender': 'female',
    'hobbies': []
   });
  }

  OnSubmit(){
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) 
      return {'nameIsForbidden': true}
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, rejctt) => {
      setTimeout(() => {
        if(control.value == 'test@test.com'){
          resolve({'emailIsForbidden': true})
        }else resolve(null)
      }, 1500);
    });
    return promise;
  }
}
