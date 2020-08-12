import { Component, ViewChild, OnInit } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
// import { SmartTableData } from '../../../@core/data/smart-table';
// import { EMPRESAS } from './empresas.json';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent implements OnInit {
  empresas: Empresa[];

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

  constructor(private empresaService: EmpresaService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(
      empresas => {
        this.source.load(empresas);
        this.empresas = empresas;
      },
    );
  }

  onDeleteConfirm(event): void {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.smartTable.edit.subscribe((dataObject: any) => {
      this.router.navigate(['/pages/administracion/empresas/form', dataObject.data.id]);
    });
    this.smartTable.delete.subscribe((dataObject: any) => {
      this.empresaService.deleteEmpresa(dataObject.data).subscribe(
        response => {
          this.empresas = this.empresas.filter(emp => emp !== dataObject.data);
          this.source.load(this.empresas);
        });
    });
    this.smartTable.create.subscribe((dataObject: any) => {
      this.router.navigate(['/pages/administracion/empresas/form']);
    });
  }
}
