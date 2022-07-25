import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li {
    cursor: pointer
  }
  `
  ]
})
export class PorPaisComponent  {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = []; 
  mostrarSugerencias: boolean = false;

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    
    this.paisService.buscarPais(this.termino)
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
    this.termino = termino;
    this.mostrarSugerencias = true
    
    this.paisService.buscarPais( termino )
    .subscribe( 
      paises => this.paisesSugeridos = paises.splice(0,3),
      error => this.paisesSugeridos = [] )
  }

  constructor(private paisService: PaisService) { }

  buscarSugerido(termino: string){
    this.buscar(termino);
    
  }

}   
