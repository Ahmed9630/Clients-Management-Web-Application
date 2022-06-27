import {Component, OnInit} from "@angular/core";
import {ClientsService} from "../service/clients.service";
import {Client} from "../models/client";

@Component({
  selector : "app-clients",
  templateUrl : "./clients.component.html",
  styleUrls : [
    '../app.component.css'
  ]
})

export class ClientsComponent implements OnInit {
  clients : Client[] = [];

  client = new Client()

  constructor(private clientsService : ClientsService) {
  }

  ngOnInit(): void {
    this.clientsService.getClients()
      .subscribe((clients : Client[] ) => {
        this.clients = clients;
      })
  }


}
