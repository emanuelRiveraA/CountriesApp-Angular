import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1'; 

    constructor(private http: HttpClient) { }
    
    searchCapital( term: string): Observable<Country[]>{
        const url = `${ this.apiUrl }/capital/${ term }`;

        return this.http.get<Country[]>( url )
            .pipe(
                catchError( () => of([]) )//lo que hace es que si sucede un error en vez de devolverlo regresa un observable que va a ser un arreglo vacio
            ); //pipe es un metodo que sirve para especificar diferentes operadores de rxjs
    }

    serchCountry( term: string): Observable<Country[]>{
        const url = `${ this.apiUrl }/name/${ term }`;

        return this.http.get<Country[]>( url )
            .pipe( 
                catchError( () => of([]) )
            );
    }

    searchRegion( region: string): Observable<Region[]>{
        const url = `${ this.apiUrl }/region/${ region }`;

        return this.http.get<Region[]>( url )
            .pipe( 
                catchError( () => of([]) )
            );
    }

}