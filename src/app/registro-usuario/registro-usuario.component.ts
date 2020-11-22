import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  registroUsuarioForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    nombreUsuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password1: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
