import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { PessoaService } from './pessoa.service';

import { PessoasListComponent } from './pessoas-list/pessoas-list.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
  PessoasListComponent,
  PessoaFormComponent,
  ],
  providers: [PessoaService],
})
export class PessoaModule { }
