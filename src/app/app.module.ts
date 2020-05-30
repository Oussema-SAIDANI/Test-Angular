import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClientComponent } from './client/client.component';
import { Routes, RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { BesoinComponent } from './besoin/besoin.component';
import { FicheComponent } from './fiche/fiche.component';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'besoin', component: BesoinComponent },
  { path: '', component: FicheComponent },
  { path: 'fiche/:id', component: FicheComponent },
  { path: 'conversation', component: ConversationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientComponent,
    FilterPipe,
    BesoinComponent,
    FicheComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
