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
<<<<<<< HEAD
  solicitud: FormGroup ;
=======
  solicitud: FormGroup = this.fb.group({
    nif: [null, Validators.required],
    fechaNacimiento :[null, Validators.required],
    codigoPostal:[null, Validators.required],
    portal : [null, Validators.required]
  });
>>>>>>> b703ff3586cff09356a787535d7e4e59a33491a5

  constructor(private fb: FormBuilder) {
    this.solicitud = fb.group({
      nif: [null, Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.solicitud.value);
  }
}
