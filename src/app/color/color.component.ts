import { PremierService } from '../premier.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService],
})
export class ColorComponent implements OnInit {
  color = 'red';

  constructor(
    private premierService: PremierService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.color = params.default;
    });
  }
  processReq(message: any) {
    alert(message);
  }
  loggerMesData() {
    this.premierService.logger('test');
  }
  // tslint:disable-next-line: typedef
  goToCv() {
    const link = ['cv'];
    this.router.navigate(link);
  }
}
