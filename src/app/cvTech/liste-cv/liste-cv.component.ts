import { Personne } from './../../Model/Personne';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css'],
})
export class ListeCvComponent implements OnInit {
  @Input() personnes: Personne[];
  @Output() selectedPersonne = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  selectPeronne(selectedPersonne) {
    this.selectedPersonne.emit(selectedPersonne);
  }
}
