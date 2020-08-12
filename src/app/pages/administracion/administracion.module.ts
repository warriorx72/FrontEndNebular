import { NgModule } from '@angular/core';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdministracionRoutingModule, routedComponents } from './administracion-routing.module';
import { FormComponent } from './empresas/form.component';
import { EmpleadosComponent } from './empleados/empleados.component';



@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    AdministracionRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    FormComponent,
    EmpleadosComponent,
  ],
})
export class AdministracionModule { }
