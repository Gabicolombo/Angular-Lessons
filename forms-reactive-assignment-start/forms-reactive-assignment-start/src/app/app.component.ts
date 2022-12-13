import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs-compat';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  signupForm: FormGroup;
  forbiddenProjectName = ['Test'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'subscription': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.signupForm.value);
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

  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenProjectName.indexOf(control.value) !== -1) 
      return {'nameIsForbidden': true}
    return null;
  }
}

