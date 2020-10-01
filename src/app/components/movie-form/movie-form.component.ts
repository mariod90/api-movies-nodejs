import { Component, HostBinding, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-movie-form',
    templateUrl: './movie-form.component.html',
    styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
    @HostBinding('class') classes = 'row';

    movie: Movie = {
        id: 0,
        title: '',
        synopsis: '',
        image: '',
        release_date: new Date(),
        updated_at: null,
        create_at: new Date(),
    };

    edit: boolean = false;

    constructor(
        private movieService: MoviesService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    saveNewMovie(): void {
        delete this.movie.create_at;
        delete this.movie.id;
        this.movieService.saveMovie(this.movie).subscribe(
            (res) => {
                console.log(res);
                this.router.navigate(['movies']);
            },
            (error) => console.error(error)
        );
    }
    updateMovie(): void {
        delete this.movie.create_at;
        delete this.movie.updated_at;
        this.movieService.updateMovie(this.movie.id, this.movie).subscribe(
            (res) => {
                console.log(res);
                this.router.navigate(['movies']);
            },
            (error) => console.error(error)
        );
    }

    ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params;
        if (params.id) {
            this.movieService.getMovie(params.id).subscribe(
                (res) => {
                    console.log(res);
                    this.movie = res;
                    this.edit = true;
                },
                (error) => console.error(error)
            );
        }
    }
}
