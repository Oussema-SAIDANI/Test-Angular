import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Client } from '../Models/Client.model';
import { API_URL } from '../app.constants';
import { Entreprise } from '../Models/Entreprise.model';
import { Conversation } from '../Models/Conversation.model';
import { Besoin } from '../Models/Besoin.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  ListAll(){
    return this.http.get<Conversation[]>(`${API_URL}/conversation/all`);
  }
  GetClients() {
    return this.http.get<Client[]>(`${API_URL}/client/all`);
  }
  GetOneClient(id) {
    return this.http.get<Client>(`${API_URL}/client/${id}`);
  }

  GetEntreprise() {
    return this.http.get<Entreprise[]>(`${API_URL}/entreprise/all`);
  }
  Ajouter(besoin) {
    return this.http.post(`${API_URL}/besoin/add`, besoin);
  }
  ListAllBesoin(){
    return this.http.get<Besoin[]>(`${API_URL}/besoin/all`);
  }
}
