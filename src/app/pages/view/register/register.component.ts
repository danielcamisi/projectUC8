import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> master

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
      signUpform!: FormGroup;
<<<<<<< HEAD

      constructor(
        private formBuilder: FormBuilder,

=======
      constructor(
        private formBuilder: FormBuilder,
        private router: Router
>>>>>>> master
      ){}
  ngOnInit():void{
      this.signUpform = this.formBuilder.group({
        user: ['', Validators.required],
        email: ['', Validators.required],
        pword: ['', Validators.required]
      })
  }
<<<<<<< HEAD
  
=======

    submit(){
      if(this.signUpform.valid){
        console.log("Usuário registrado com sucesso");
        this.router.navigate(['login']);
      }
    }

>>>>>>> master
}
