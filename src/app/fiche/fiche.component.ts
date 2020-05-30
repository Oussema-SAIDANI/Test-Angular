import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../Models/Client.model';
import { Entreprise } from '../Models/Entreprise.model';
import { Conversation } from '../Models/Conversation.model';
import { Besoin } from '../Models/Besoin.model';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  client = new Client();
  conversations: Conversation[];
  entreprises: Entreprise[];
  besoins: Besoin[];
  id: number;
  constructor(private service: ClientService, private activatedroute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.params.id;
    this.service.ListAllBesoin().subscribe(
      (data) => {
      this.besoins = data;
      });
    this.service.GetOneClient(this.id).subscribe(
      (data) => {
        this.client = data ;
        console.log(this.client);
      }
    );
    this.service.GetEntreprise().subscribe(
      (data) => {
        this.entreprises = data ;
       // console.log(this.entreprises);
      }
    );
    this.service.ListAll().subscribe(
      (data) => this.conversations = data
    )
  }

  nav()
  {
    this.route.navigate(['conversation']);
  }
  navigate()
  {
    this.route.navigate(['client']);
  }
  BesoinNavigate()
  {
    this.route.navigate(['besoin']);
  }

  consult(cv){
    window.open('http://localhost:8080/' + cv);
    }

}
