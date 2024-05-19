import { TipoEstadoCelda } from './TipoEstadoCelda';

export interface EstadoCelda {
  id: number;
  nombreEstado: string;
  tipoEstadoCelda: TipoEstadoCelda;
}
