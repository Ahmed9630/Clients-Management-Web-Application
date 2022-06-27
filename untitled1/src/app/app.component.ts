import { Component } from '@angular/core';
import {CrudService} from "./service/crud.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled1';

  Fname:string ='';

  password: string='';
  CIN: number=0;
  dateB: string='';
  email: string='';
  clientT: string='';
  number: number =0;
  message: string="";

  constructor(public crudsevice:CrudService) {}

  CreateRecord(){
    let Record :any = {};

    Record['Fname']= this.Fname;
    Record['password']= this.password;
    Record['CIN']= this.CIN;
    Record['dateB']= this.dateB;
    Record['number']= this.number;
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
