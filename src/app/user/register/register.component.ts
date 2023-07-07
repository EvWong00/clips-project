import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth: AngularFireAuth) {}

  inSubmission = false

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(100)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password = new FormControl('', [
    Validators.required
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])

  showAlert = true
  alertMsg = 'Please wait! your account is being created.'
  alertColor = 'blue'

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  })

  

  formSubmitted = false;

  async register() {
  // Submit the form and set formSubmitted to true upon success
  if (this.registerForm.valid) {
    // Your code to submit the form

    this.formSubmitted = true;
    // You can also reset the form if needed
    // this.registerForm.reset();

    this.inSubmission = true

    const { email, password } = this.registerForm.value
    
    try {
    const userCred = await this.auth.createUserWithEmailAndPassword(
      email as string, password as string
      )
      console.log(userCred)
    } catch(e) {
      console.error(e)

      this.alertMsg = 'An unexpected error occurred. Please try again later.'
      this.alertColor = "red"
      this.inSubmission = false
      return
    }

    this.alertMsg = 'Success! your account has been created.'
    this.alertColor = "green"
  }
}

}
