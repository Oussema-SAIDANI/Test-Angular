import { Component, OnInit } from "@angular/core";
import { Besoin } from "../Models/Besoin.model";
import { BesoinService } from "../services/besoin.service";
import { Location } from '@angular/common';

@Component({
  selector: "app-besoin",
  templateUrl: "./besoin.component.html",
  styleUrls: ["./besoin.component.css"],
})
export class BesoinComponent implements OnInit {
  besoin = new Besoin();
  besoins: any;
  file;
  msg: string;
  constructor(private service: BesoinService, private location: Location) {}

  ngOnInit() {
    this.service.ListAll().subscribe(
      (data) => {
      this.besoins = data;
      });
  }

  Save() {
    const data: FormData = new FormData();
    data.append("besoin", this.besoin.besoin);
    data.append("ao", this.besoin.ao);
    data.append("statut", this.besoin.statut);
    data.append("cv", this.file);
    this.service.Ajouter(data).subscribe(
      () => {
   this.location.back();

      } );
  }
  selectImage(event) {
    this.file = event.target.files[0];
  }
  consult(cv){
  window.open('http://localhost:8080/' + cv);
  }
}
