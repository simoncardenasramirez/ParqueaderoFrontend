import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celda } from '../interfaces/Celda';

@Injectable({
  providedIn: 'root',
})
export class CeldasService {
  constructor(private http: HttpClient) {}
  // Inicialización de las celdas (por ejemplo, se pueden cargar desde una API)
  initializeCells(): Observable<Celda[]> {
    // Supongamos que se tienen algunas celdas predefinidas
    return this.http.get<Celda[]>('');
  }
  getCells(): Observable<Celda[]> {
    return this.http.get<Celda[]>('');
  }
  cambiarEstadoCelda(id: number): Observable<Celda> {
    return this.http.put<Celda>('' + id, {});
  }

}
