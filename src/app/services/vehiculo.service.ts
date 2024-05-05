import { Injectable } from '@angular/core';
import { Vehiculo } from '../interfaces/Vehiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  vehiculos: Vehiculo[]=[]
  constructor() { }
  agregarVehiculo(data:Vehiculo){
    this.vehiculos.push(data)
  }
  traerVehiculosRegistrados():Vehiculo[]{
     return this.vehiculos;
  }
}
