import { EmpresaService } from './empresa.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public empresa: Empresa = new Empresa();
  public titulo = 'Crear Empresa';
  min: Date;
  max: Date;

  cargarEmpresa(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params['id'];
        if (id) {
          this.empresaService.getEmpresa(id).subscribe(
            (empresa) => this.empresa = empresa,
          );
        }
      },
    );
  }

  public create(): void {
    this.empresaService.postEmpresa(this.empresa).subscribe(
      empresa => {
        this.router.navigate(['pages/administracion/empresas']);
        // tslint:disable-next-line: no-console
        console.log(empresa.idText);
      },
    );
  }

  public update(): void {
    this.empresaService.putEmpresa(this.empresa).subscribe(
      empresa => {
        this.router.navigate(['pages/administracion/empresas']);
        // tslint:disable-next-line: no-console
        console.log(empresa.idText);
      },
    );
  }

  constructor(private empresaService: EmpresaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    protected dateService: NbDateService<Date>) {
    this.max = this.dateService.addDay(this.dateService.today(), 0);
  }

  ngOnInit(): void {
    this.cargarEmpresa();
  }

}
