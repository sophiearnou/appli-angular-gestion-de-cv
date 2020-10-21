import { Personne } from './../../Model/Personne';
import { CvService } from './../cv.service';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.personne = this.cvService.getPersonneById(params.id);
      console.log(this.personne);
    });
  }
}
