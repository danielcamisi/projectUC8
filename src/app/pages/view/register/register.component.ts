import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
      signUpform!: FormGroup;

      constructor(
        private formBuilder: FormBuilder,

      ){}
  ngOnInit():void{
      this.signUpform = this.formBuilder.group({
        user: ['', Validators.required],
        email: ['', Validators.required],
        pword: ['', Validators.required]
      })
  }

    submit(){
      if(this.signUpform.valid){
        console.log("Usuário registrado com sucesso")
      }
    }

}
