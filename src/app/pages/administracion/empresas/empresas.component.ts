import { Component, ViewChild, OnInit } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { EmpresaService } from './empresa.service';
@Component({
  selector: 'ngx-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent implements OnInit {
  @ViewChild('table')
  smartTable: Ng2SmartTableComponent;
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
      idText: {
        title: 'Folio',
      },
      nombreRazonSocial: {
        title: 'Razon Social',
      },
      giroComercial: {
        title: 'Giro',
      },
      cargo: {
        title: 'Cargo',
      },
    },
    mode: 'external',
  };

  source: LocalDataSource = new LocalDataSource();

  constructor( private empresaService: EmpresaService) {
  }
  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(
      empresas => this.source.load(empresas),
    );
  }

  onDeleteConfirm(event): void {
    // tslint:disable-next-line: no-console
    console.log('vamos a mamamsiar');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    // tslint:disable-next-line: no-console
    console.log('Values on ngAfterViewInit():');
    this.smartTable.edit.subscribe((dataObject: any) => {
      // tslint:disable-next-line: no-console
      console.log('Edit');
    });
    this.smartTable.delete.subscribe((dataObject: any) => {
      // tslint:disable-next-line: no-console
      console.log('Delete');

    });
    this.smartTable.create.subscribe((dataObject: any) => {
      // tslint:disable-next-line: no-console
      console.log('Create');
    });
  }
}
