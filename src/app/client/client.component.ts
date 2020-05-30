import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../Models/Client.model';
import {Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[];
  searchString: string;
  constructor(private clienService: ClientService, private route: Router) { }

  ngOnInit() {
    this.afficherAll();
  }
  afficherAll() {
    this.clienService.GetClients().subscribe(
      (response) => {
        this.clients = response;
      }
    );
  }
  FicheContact(id) {
    this.route.navigate(['fiche', id]);
  }

}
