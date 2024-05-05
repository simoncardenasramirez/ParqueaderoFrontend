import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-formulario-vehiculo',
  templateUrl: './formulario-vehiculo.component.html',
  styleUrls: ['./formulario-vehiculo.component.css']
})
export class FormularioVehiculoComponent implements OnInit {
  tipoVehiculos = [{
    id: 1,
    name: "Carro"
  }, {
    id: 2,
    name: "Moto"
  },
  ]
  vehiculoFormulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private vehiculoService: VehiculoService) {
    this.vehiculoFormulario = this.formBuilder.group(
      {
      matricula: new FormControl('', Validators.required),
      tipo_vehiculo: new FormControl('', Validators.required)
    }
  )
  }

  ngOnInit(): void {
  }

}
