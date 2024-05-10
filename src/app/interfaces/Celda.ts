import { EstadoCelda } from './TipoCelda';
import { TipoEstadoCelda } from './TipoEstadoCelda';
export interface Celda {
  id: number;
  nombre: string;
  disponible: boolean;
  estadoCelda: EstadoCelda;
  tipoEstadoCelda: TipoEstadoCelda;
}
