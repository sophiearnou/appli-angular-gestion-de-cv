import { CvService } from './../cv.service';
import { Component, OnInit } from '@angular/core';
import { Personne } from './../../Model/Personne';
import { PremierService } from './../../premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }
  // tslint:disable-next-line: typedef
  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}
