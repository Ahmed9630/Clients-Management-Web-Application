import { Component } from '@angular/core';
import {CrudService} from "./service/crud.service";
import {error} from "@angular/compiler/src/util";
import {ClientsService} from "./service/clients.service";
import {Client} from "./models/client";

@Component({
  selector: 'app-root',
  templateUrl: './form.component.html',
  styleUrls: ['./app.component.css']
})
export class FormComponent {
  title = 'untitled1';

  Fname:string ='0';

  password: string='0';
  CIN: number=0;
  dateB: string='0';
  email: string='0';
  clientT: string='0';
  number: number =0;
  message: string="";

  constructor(public crudsevice:CrudService, private  clientsService : ClientsService) {}

  CreateRecord(){
    let Record :any = {};
    let client = new Client();

    Record['Fname']= this.Fname;
    client.fname= this.Fname;
    Record['password']= this.password;
    client.password= this.password;
    Record['CIN']= this.CIN;
    client.cin = this.CIN + "";
    Record['dateB']= this.dateB;
    client.dateB = this.dateB
    Record['number']= this.number;
    client.number = this.number;
    this.clientsService.createClient(client)
      .subscribe(() => {}, () => alert("An error occured"));

    // Firebase
    this.crudsevice.create_Newclient(Record).then(res =>
    {
      this.Fname="";
      this.password="";

      console.log(res);
      this.message = "client.ts data saved";


    }).catch(error => {
      console.log(error);
    });

  }
}
