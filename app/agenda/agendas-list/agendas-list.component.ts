import { Component, OnInit } from '@angular/core';

import { AgendaService } from '../agenda.service';

import { Agenda } from '../agenda-model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'agendas-list',
  templateUrl: './agendas-list.component.html',
  styleUrls: ['./agendas-list.component.scss']
})
export class AgendasListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
