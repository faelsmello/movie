import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    movie: any = null;

  constructor(private appService: AppService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.appService.getById(this.activatedRoute.snapshot.params.id)
          .subscribe((response: any) => {
              console.log(response);
              this.movie = response;
          });
  }

}
