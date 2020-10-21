import { CvService } from './../cv.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {}

  addPersonne(formulaire: NgForm) {
    const link = ['cv'];
    this.cvService.addPersonne(formulaire.value);
    this.router.navigate(link);
  }
}
