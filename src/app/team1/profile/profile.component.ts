import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{

  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,

} from '../validators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

  profile_form: FormGroup;
  matching_passwords: FormGroup;

  constructor() { }

  ngOnInit() {

     // matching passwords validation
    //  this.matching_passwords = new FormGroup({
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required,
    //     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    //   ])),

    //   confirm_password: new FormControl('', Validators.required)
    // }, (formGroup: FormGroup) => {
    //   return PasswordValidator.areEqual(formGroup);
    // });


    this.profile_form = new FormGroup({

      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
       ])),


      // 'username' : new FormControl('', Validators.required),
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'phone' : new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
        // matching_passwords: this.matching_passwords,

        'password': new FormControl ('',[Validators.compose([Validators.required,Validators.minLength(6)])]),



        'confirm_password': new FormControl ('',[Validators.compose([Validators.required,Validators.minLength(6)])]),
        'home_town' : new FormControl('', Validators.required),
        'type': new FormControl('' ,Validators.required),
        'personal_id' : new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
          ]),

        'avatar' : new FormControl('', Validators.required),
        'first_name' : new FormControl('', Validators.required),
        'middle_name' : new FormControl('', Validators.required),
        'last_name' : new FormControl('', Validators.required),
        'birthday' : new FormControl('', Validators.required),
        'school' : new FormControl('', Validators.required),
        'major' : new FormControl('', Validators.required),



    });
    }
    clicksub() {
      console.log(this.profile_form.value);
      this.profile_form.reset();
    }
    get username() {
      return this.profile_form.get('username');
    }
    get email() {
      return this.profile_form.get('email');
    }
    get phone() {
      return this.profile_form.get('phone');
    }
    get password() {
      return this.profile_form.get('password');
    }
    get confirm_password() {
      return this.profile_form.get('confirm_password');
    }
    get type() {
      return this.profile_form.get('type');
    }
    get home_town() {
      return this.profile_form.get('home_town');
    }
    get avatar() {
      return this.profile_form.get('avatar');
    }
    get personal_id() {
      return this.profile_form.get('personal_id');
    }
    get first_name() {
      return this.profile_form.get('first_name');
    }
    get middle_name() {
      return this.profile_form.get('middle_name');
    }
    get last_name() {
      return this.profile_form.get('last_name');
    }
    get birthday() {
      return this.profile_form.get('birthday');
    }
    get gender() {
      return this.profile_form.get('gender');
    }
    get school() {
      return this.profile_form.get('school');
    }
    get major() {
      return this.profile_form.get('major');
    }
    // onSubmitProfile(value){
    //   console.log(value);
    // }
  }
