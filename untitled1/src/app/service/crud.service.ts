import { Injectable } from '@angular/core';
import{AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  constructor(public fireservices:AngularFirestore) { }

  create_Newclient(Record: any){
    return this.fireservices.collection('Client').add(Record);

  }
}
