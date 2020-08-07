import { Component, ɵConsole, ViewChild } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import {EMPRESAS} from './empresas.json';
import { Empresa } from './empresa';
@Component({
  selector: 'ngx-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent {

  @ViewChild('table')
  smartTable: Ng2SmartTableComponent;
empresas: Empresa[];
settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
      },
      firstName: {
        title: 'First Name',
      },
      lastName: {
        title: 'Last Name',
      },
      username: {
        title: 'Username',
      },
      email: {
        title: 'E-mail',
      },
      age: {
        title: 'Age',
      },
    },
    mode: 'external',
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    // tslint:disable-next-line: no-console
    console.log(data);
    this.empresas = EMPRESAS;
    this.source.load(this.empresas);
  }

  onDeleteConfirm(event): void {
console.log('vamos a mamamsiar');
  }

  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    this.smartTable.edit.subscribe( (dataObject: any) => {
      console.log('Edit');
    });
    this.smartTable.delete.subscribe( (dataObject: any) => {
      console.log('Delete');

    });
    this.smartTable.create.subscribe( (dataObject: any) => {
      console.log('Create');
    });
  }
}
