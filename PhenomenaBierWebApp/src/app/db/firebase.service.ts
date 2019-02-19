import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import {AngularFireModule} from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public _fbs: AngularFirestore) { 
  }
  getPath(path: string) {
    var onpath: Observable<any[]>;
    var _collection: AngularFirestoreCollection<any>;
    _collection = this._fbs.collection(path);
    onpath = _collection.valueChanges();
    return onpath;
  }
  get getUser(): string{
        const user =  JSON.parse(localStorage.getItem('user'));
        return  user; 
    }
}
