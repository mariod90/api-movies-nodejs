import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
    movies: any = [];
    tempMovieList: any = [];
    constructor(private movieService: MoviesService) {}

    ngOnInit(): void {
        this.getListMovies();
    }

    getListMovies() {
        this.movieService.getMovies().subscribe(
            (res) => {
                this.movies = res;
            },
            (error) => console.error(error)
        );
    }
}
