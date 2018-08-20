import { CinemaService } from './../services/cinema.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  movies: Array<Object> = [];

  constructor(private router: Router, private cinemaService: CinemaService) { }

  ngOnInit() {
    this.movies = this.cinemaService.getMovies();
  }

}
