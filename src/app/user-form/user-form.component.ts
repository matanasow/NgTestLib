import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'te-st-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  changePassForm = new FormGroup({
    "currentPass": new FormControl('', [Validators.required, Validators.minLength(3)]),
    "newPass": new FormControl('', [Validators.required]),
    "confirmNewPass": new FormControl('', [Validators.required])
  })

  currPass = '1234'
  
  changePass(){
    if(this.changePassForm.get('currentPass').value != this.currPass){
      console.log('Password is wrong!')
    }
    if(this.changePassForm.get('currentPass').value === this.changePassForm.get('newPass').value){
      console.log('The new password must be different than current passowrd!')
    }
    if(this.changePassForm.get('newPass').value != this.changePassForm.get('confirmNewPass').value){
      console.log('Confirm new password must be same than new password!')
    }
  }

  // this.laptopForm = new FormGroup ({
  //   processor: new FormControl('Intel Core i7'),
  //   ram: new FormControl('16GB DDR4')
  // })



}
