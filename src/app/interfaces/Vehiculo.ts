import { TipoVehiculo } from "./TipoVehiculo";

export interface Vehiculo {
  id:number;
  matricula: string;
  tipoVehiculo: TipoVehiculo;
}
