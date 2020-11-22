
import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm = new FormGroup({
    nombreEmpresa: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password1: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

}
