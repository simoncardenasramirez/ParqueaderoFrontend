import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Vehiculo } from 'src/app/interfaces/Vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { CeldasService } from 'src/app/services/celdas.service';
import { Celda } from 'src/app/interfaces/Celda';

@Component({
  selector: 'app-formulario-vehiculo',
  templateUrl: './formulario-vehiculo.component.html',
  styleUrls: ['./formulario-vehiculo.component.css'],
})
export class FormularioVehiculoComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'action'];
  informacionTabla: Celda[] = [];
  isSearch: boolean = false;
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
    private vehiculoService: VehiculoService,
    private celdasService: CeldasService
  ) {
    this.vehiculoFormulario = this.formBuilder.group({
      id: new FormControl(0),
      matricula: new FormControl('', Validators.required),
      tipo_vehiculo_id: new FormControl(1, Validators.required),
    });
  }
  enviar() {
    console.log(this.vehiculoFormulario.value);
    this.vehiculoService
      .agregarVehiculo(this.vehiculoFormulario.value)
      .subscribe((response) => {});
    this.celdasService.getCells().subscribe((data) => {
      this.informacionTabla = data;
      this.isSearch = true;
    });
    this.isSearch = true;
  }
  asignarCelda(data: Celda) {
    console.log(data.id);
    this.celdasService.cambiarEstadoCelda(data.id).subscribe((response) => {
      console.log(response);
    });
  }
  ngOnInit(): void {}
}
