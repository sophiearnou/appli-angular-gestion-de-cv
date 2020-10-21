import { Injectable } from '@angular/core';
import { Personne } from './../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];

  constructor() {
    this.personnes = [
      new Personne(
        0,
        'arnou',
        'sophie',
        43,
        'soph.png',
        7777,
        'developpeuse web'
      ),
      new Personne(
        1,
        'deunor',
        'mickael',
        28,
        'rotating_card_profile2.png',
        22222,
        'football Player'
      ),
      new Personne(2, 'deu', 'mic', 38, '', 1111, 'football '),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id: number): Personne {
    const personne = this.personnes.find((personne) => {
      return personne.id == id;
    });
    return personne;
  }
  addPersonne(personne: Personne): void {
    console.log(personne);
    personne.id = this.personnes[this.personnes.length - 1].id + 1;
    this.personnes.push(personne);
  }
}
