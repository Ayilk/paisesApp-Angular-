import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisbyId(id))
    )
    .subscribe(resp => {
      console.log(resp)
    })

    // this.activateRoute.params
    // .subscribe(({id}) => {
    //   console.log(id)

    //   this.paisService.getPaisbyId(id)
    //   .subscribe(pais => {
    //     console.log(pais)
    //   })
    // })
  }

}
