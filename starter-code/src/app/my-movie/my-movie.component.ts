import { CinemaService } from './../services/cinema.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movie: object;
  id: number;

  constructor(private router: ActivatedRoute, private cinemaService: CinemaService) { }

  ngOnInit() {
    // console.log((`params: ${this.router.params}`))
    this.router.params.subscribe((params) =>
      this.id = Number(params['id']));

    this.movie = this.cinemaService.getMovie(this.id);
  }
}

