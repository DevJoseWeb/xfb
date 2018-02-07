import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Agenda } from './agenda-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface NewAgenda {
  players: string;
  inicio: number;
  termino: number;
  layout: string;
  sequencia: string;
  prioridade: string;
  id?: string;
  datacadastro: number;
}

@Injectable()
export class AgendaService {

  agendaCollection: AngularFirestoreCollection<Agenda>;
  agendaDocument:   AngularFirestoreDocument<Agenda>;

  constructor(private afs: AngularFirestore) {
    this.agendaCollection = this.afs.collection('agendas', (ref) => ref.orderBy('datacadastro', 'desc').limit(5));
  }

  getData(): Observable<Agenda[]> {
    return this.agendaCollection.valueChanges();
  }

  getSnapshot(): Observable<Agenda[]> {
    // ['added', 'modified', 'removed']
    return this.agendaCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Agenda;
        return {
            id: a.payload.doc.id,
            players: data.players,
            inicio: data.inicio,
            termino: data.termino,
            layout: data.layout,
            sequencia: data.sequencia,
            prioridade: data.prioridade};
          });
        });
      }

      getAgenda(id: string) {
        return this.afs.doc<Agenda>(`agendas/${id}`);
    }

}
