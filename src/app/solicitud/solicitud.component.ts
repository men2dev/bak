import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  solicitud: FormGroup = this.fb.group({
    nif: [null, Validators.required],
    fechaNacimiento :[null, Validators.required],
    codigoPostal:[null, Validators.required],
    portal : [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.solicitud.value);
  }
}
