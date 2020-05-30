import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Conversation } from '../Models/Conversation.model';
import { ConversationService } from '../services/conversation.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  conversation = new Conversation();
  constructor(private location: Location, private service: ConversationService) { }

  ngOnInit() {
  }

  Save() {
    this.service.Ajouter(this.conversation).subscribe(
      () => this.location.back()
    )
  }

}
