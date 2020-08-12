import { NgModule } from '@angular/core';
import {
  NbCardModule, NbTreeGridModule,
  NbIconModule, NbInputModule, NbCheckboxModule, NbButtonModule, NbDatepickerModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdministracionRoutingModule, routedComponents } from './administracion-routing.module';
import { FormComponent } from './empresas/form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
    FormsModule,
    AdministracionRoutingModule,
    Ng2SmartTableModule,
    NbCheckboxModule,
    NbDatepickerModule,
  ],
  declarations: [
    ...routedComponents,
    FormComponent,
  ],
})
export class AdministracionModule { }
