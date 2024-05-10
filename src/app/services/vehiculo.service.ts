import { Vehiculo } from 'src/app/interfaces/Vehiculo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  constructor(private http: HttpClient) {}
  agregarVehiculo(data: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>('http://localhost:4000/vehiculo', data);
  }
  traerVehiculosRegistrados(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>('http://localhost:4000/vehiculo');
    // return this.http.get<string>('')
  }
}
