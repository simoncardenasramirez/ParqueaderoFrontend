import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Vehiculo } from 'src/app/interfaces/Vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-formulario-vehiculo',
  templateUrl: './formulario-vehiculo.component.html',
  styleUrls: ['./formulario-vehiculo.component.css'],
})
export class FormularioVehiculoComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  tipoVehiculos = [
    {
      id: 1,
      name: 'Carro',
    },
    {
      id: 2,
      name: 'Moto',
    },
  ];
  vehiculoFormulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vehiculoService: VehiculoService
  ) {
    this.vehiculoFormulario = this.formBuilder.group({
      id: new FormControl(0),
      matricula: new FormControl('', Validators.required),
      tipo_vehiculo_id: new FormControl('', Validators.required),
    });
  }

  enviar() {
    console.log(this.vehiculoFormulario.value);
    this.vehiculoService
      .agregarVehiculo(this.vehiculoFormulario.value)
      .subscribe((response) => {
        // Limpiar el formulario después de enviar los datos
        this.vehiculoFormulario.reset();
      });
  }

  ngOnInit(): void {}
}
