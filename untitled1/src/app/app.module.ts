import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'

import {environment} from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

import {CrudService} from './service/crud.service';
import {ClientsComponent} from "./clients/clients.component";
import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./form.component";
import {HttpClientModule} from "@angular/common/http";

const routes : Routes = [
  { path : "", component : FormComponent },
  { path : "clients", component : ClientsComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
