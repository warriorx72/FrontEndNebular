import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion.component';
import { EmpresasComponent } from './empresas/empresas.component';



const routes: Routes = [{
  path: '',
  component: AdministracionComponent,
  children: [
    {
      path: 'empresas',
      component: EmpresasComponent,
    },
    {
      path: 'empleados',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule { }

export const routedComponents = [
  EmpresasComponent,
  AdministracionComponent,
];
