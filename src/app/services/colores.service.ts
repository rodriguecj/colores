import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { pluck, delay, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  public selectedColor: string = '';
  public total_pages: number = 0


  constructor(private http: HttpClient) { }

  getColors( page ){
    let url = environment.urlColors;
    return this.http.get( `${ url }?page=${ page }` )
                .pipe(
                  tap( (data: any)=>this.total_pages = data.total_pages),
                  pluck('data'),
                )
    
  }

}
