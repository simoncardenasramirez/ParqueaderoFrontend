import { Vehiculo } from 'src/app/interfaces/Vehiculo';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioVehiculoComponent } from './components/formulario-vehiculo/formulario-vehiculo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConsultarVehiculoComponent } from './components/consultar-vehiculo/consultar-vehiculo.component';

const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Home' },
  {
    path: 'registrar-vehiculo',
    component: FormularioVehiculoComponent,
    title: 'Registrar',
  },
  {
    path: 'consultar-Vehiculo',
    component: ConsultarVehiculoComponent,
    title: 'consultar vehiculo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
