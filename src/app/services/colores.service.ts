import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  constructor(private http: HttpClient) { }

  getColors( page: string = '1'){
    let url = environment.urlColors;
    return this.http.get( `${ url }?page=${ page }` );
  }

}
