<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
>>>>>>> master

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
<<<<<<< HEAD
export class LoginComponent {
=======
export class LoginComponent implements OnInit{
  signUpform!: FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private router: Router

  ){}

  ngOnInit(): void {
    this.signUpform = this.formBuilder.group({
      email: ['', Validators.required],
      pword: ['', Validators.required]
    })
  }

  submit(){
    if(this.signUpform.valid){
      console.log("Usuário logado com sucesso!");
      this.router.navigate(['home']);
    }
  }
>>>>>>> master

}
