import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Client} from "../models/client";
import {environment} from "../../environments/environment";

@Injectable({ providedIn : 'root' })
export class ClientsService {

  constructor(private httpClient : HttpClient) {
  }

  getClients(){
    return this.httpClient.get<Client[]>(environment.apiurl + "clients")
  }

  createClient(client: Client) {
    return this.httpClient.post<Client>(environment.apiurl + "clients", client);
  }
}
