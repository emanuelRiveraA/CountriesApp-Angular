import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1'; 

    public cacheStore: CacheStore = {
        byCapital:   { term: '', countries: []},
        byCountries: { term: '', countries: []},
        byRegion:    { region: '', countries: []},
    }

    constructor(private http: HttpClient) { }

    private getCountriesRequest( url: string ): Observable<Country[]> {
        return this.http.get<Country[]>( url )
            .pipe(
                catchError( () => of( [] )),
                delay( 1000 ),
            );
    }

    searchCountryByAlphaCode( code: string ): Observable<Country | null>{

        const url = `${ this.apiUrl }/alpha/${ code }`;

        return this.http.get<Country[]>( url )
            .pipe(
                map( countries => countries.length > 0 ? countries[0] : null ),
                catchError( () => of(null) )//lo que hace es que si sucede un error en vez de devolverlo regresa un observable que va a ser un arreglo vacio
            ); //pip
    }
    
    searchCapital( term: string): Observable<Country[]>{
        const url = `${ this.apiUrl }/capital/${ term }`;
        return this.getCountriesRequest( url )
            .pipe(
                tap( countries => this.cacheStore.byCapital = { term: term, countries: countries } )
            );//disparar operadores de rxjs
        //return this.http.get<Country[]>( url )
            //.pipe(
            //    catchError( () => of([]) )//lo que hace es que si sucede un error en vez de devolverlo regresa un observable que va a ser un arreglo vacio
            //); //pipe es un metodo que sirve para especificar diferentes operadores de rxjs
    }

    serchCountry( term: string): Observable<Country[]>{
        const url = `${ this.apiUrl }/name/${ term }`;
        return this.getCountriesRequest( url );
    }

    searchRegion( region: string): Observable<Region[]>{
        const url = `${ this.apiUrl }/region/${ region }`;

        return this.http.get<Region[]>( url )
            .pipe( 
                catchError( () => of([]) )
            );
    }

}