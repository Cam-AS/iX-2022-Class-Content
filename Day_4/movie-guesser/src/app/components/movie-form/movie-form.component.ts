import { Component, OnInit } from '@angular/core';
import { movieList, Movie } from 'src/app/models/movies';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  movieForm: Movie = new Movie();
  randomMovie: Movie = new Movie();
  userGuess: Movie = new Movie();
  show: boolean = false;
  answer?: string;

  movies = movieList;

  constructor() {}

  ngOnInit(): void {
    this.randomMovie = this.getRandomMovie();
  }

  getRandomMovie() {
    return this.movies[Math.floor(Math.random() * movieList.length)];
  }

  next() {
    this.show = false;
    this.answer = '';
    this.randomMovie = this.getRandomMovie();
    this.userGuess = new Movie();
  }

  hint() {
    this.show = !this.show;
  }

  checkGuess() {
    if (
      this.userGuess.title?.toLowerCase() ===
      this.randomMovie.title?.toLowerCase()
    ) {
      this.answer = 'Noice';
    } else {
      this.answer = 'Sorry Mate, try again';
      this.userGuess = new Movie();
    }
  }
}
