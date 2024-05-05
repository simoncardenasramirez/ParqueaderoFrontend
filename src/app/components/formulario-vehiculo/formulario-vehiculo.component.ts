import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehiculo } from 'src/app/interfaces/Vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-formulario-vehiculo',
  templateUrl: './formulario-vehiculo.component.html',
  styleUrls: ['./formulario-vehiculo.component.css']
})
export class FormularioVehiculoComponent implements OnInit {
  vehiculos: Vehiculo[] = []
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
        tipo_vehiculoId: new FormControl(1, Validators.required)
      }
    )
  }
  enviarVehiculo() {
    this.vehiculoService.agregarVehiculo(this.vehiculoFormulario.value)
    window.alert("Se asigno correctamente el vehiculo en la base de datos")
  }
  traerVehiculos(): void {
    this.vehiculos = this.vehiculoService.traerVehiculosRegistrados()
    window.alert(this.vehiculos[this.vehiculos.length - 1].matricula+ " Id de vehiculo: "+ this.vehiculos[this.vehiculos.length - 1].tipo_vehiculoId)
  }
  ngOnInit(): void {
  }
}
