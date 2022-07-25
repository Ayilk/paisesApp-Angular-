import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl: string = 'https://restcountries.com/v3.1';
  
  
  constructor(private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>( url );
    
  }

  buscarCapital( termino: string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>( url );
    
  }

  getPaisbyId (id: string): Observable<Country>{

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>( url );
  }

  buscarRegion( region: string): Observable<Country[]> {

    const params = new HttpParams()
       .set('field', 'name')
       .set('field', 'capital')
       .set('field', 'population')
       .set('field', 'flags')
       .set('field', 'cca2');
    
    const url = `https://restcountries.com/v2/regionalbloc/${region}`;

    return this.http.get<Country[]>( url, {params} )
       .pipe(
        tap( console.log)
       ); 
  }


}
