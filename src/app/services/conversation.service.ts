import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';
import { HttpClient } from '@angular/common/http';
import { Conversation } from '../Models/Conversation.model';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private http: HttpClient) { }

  Ajouter(conversation) {
    return this.http.post(`${API_URL}/conversation/add`, conversation);
  }
  ListAll(){
    return this.http.get<Conversation[]>(`${API_URL}/conversation/all`);
  }

}
