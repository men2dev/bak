import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  solicitud: FormGroup;

  constructor(private fb: FormBuilder) {
    this.solicitud = fb.group({
      nif: [null, Validators.required],
      fechaNacimiento: [null, Validators.required],
      codigoPostal: [null, Validators.required],
      portal: [null, Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.solicitud.value);
  }
}
