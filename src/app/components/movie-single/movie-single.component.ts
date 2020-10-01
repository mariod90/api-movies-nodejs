import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-movie-single',
    templateUrl: './movie-single.component.html',
    styleUrls: ['./movie-single.component.css'],
})
export class MovieSingleComponent implements OnInit {
    movie: any = [];

    constructor(
        private movieService: MoviesService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const params = this.route.snapshot.params;
        this.movieService.getMovie(params.id).subscribe(
            (res) => {
                this.movie = res;
            },
            (error) => console.error(error)
        );
    }

    deleteMovie(id: string) {
        this.movieService.deleteMovie(id).subscribe(
            (res) => {
                console.log(res);
                this.router.navigate(['movies']);
            },
            (error) => console.error(error)
        );
    }
}
