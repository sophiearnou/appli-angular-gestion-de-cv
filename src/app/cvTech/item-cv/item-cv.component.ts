import { Personne } from './../../Model/Personne';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
})
export class ItemCvComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectedPeronne() {
    this.selectedPersonne.emit(this.personne);
  }
}
