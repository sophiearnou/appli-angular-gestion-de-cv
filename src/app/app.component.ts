import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgColor = 'yellow';
  show = false;

  // à chaque fois qu'il y a un click sur le button tu appel la méthode changeStatus qui la changer l'état de la proprièté
  // la méthode va checker la proprièté show et va la mettre à false ou true
  changeStatus() {
    this.show = !this.show;
  }
}
