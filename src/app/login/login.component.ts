import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empresas:any=[
    {nombreEmpresa:"Stark Industries",
    email: "starkindustries@gmail.com",
    password: "iloveu3000",
    telefono: "95105767",
    Ubicacion:"New York",
  },
  {empresa:"Arkham",
  email: "arkham@hotmail.com",
  password: "joker",
  telefono: "32587415",
  Ubicacion:"Gotham",
} 
];
empresa:any={
};

loginForm = new FormGroup({
  usuario: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required])
})



  constructor(private navegacion: Router) { }
  ngOnInit(): void {
  }

  entrar(){
    this.empresa = this.loginForm.value;
    console.log(this.empresa);
    for (let item of this.empresas) {
      if(item.nombreEmpresa==this.empresa.NombreEmpresa){
        this.navegacion.navigate(['admin-companies']);
        if(item.password==this.empresa.password){
          console.log("Hola jóvenes");
          
          sessionStorage.setItem('empresas',JSON.stringify(item));
        }
      }
    } 
  }

  registrar(){
    this.navegacion.navigate(['registro']);
  }



}
