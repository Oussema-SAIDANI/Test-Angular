import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Besoin } from '../Models/Besoin.model';

@Injectable({
  providedIn: 'root'
})
export class BesoinService {

  constructor(private http: HttpClient) { }

  Ajouter(besoin) {
    return this.http.post(`${API_URL}/besoin/add`, besoin);
  }
  ListAll(){
    return this.http.get<Besoin[]>(`${API_URL}/besoin/all`);
  }
  getPath(name)
  {
    return this.http.get(`${API_URL}/besoin/open/` + name);
  }
}
