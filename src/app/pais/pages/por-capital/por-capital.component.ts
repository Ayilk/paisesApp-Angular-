import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    
    this.paisService.buscarCapital(this.termino)
    .subscribe({
      next: data => {
        this.paises = data
        console.log(this.paises)
      },
      error: error => {
        this.hayError = true;
        console.info(error);
        this.paises = [];
      }
    });

    
  }

  sugerencias( termino: string ){
    this.hayError = false;
    //todo: crear sugerencias
  }

  constructor(private paisService: PaisService) { }

}
