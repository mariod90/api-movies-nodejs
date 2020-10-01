import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../components/models/Movie';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    public API_URI = 'http://localhost:3000/api';

    getMovies(): Observable<any> {
        return this.http.get(`${this.API_URI}/movies`);
    }

    getMovie(id: string): Observable<Movie> {
        return this.http.get(`${this.API_URI}/movies/${id}`);
    }

    deleteMovie(id: string): Observable<any> {
        return this.http.delete(`${this.API_URI}/movies/${id}`);
    }

    saveMovie(movie: Movie): Observable<any> {
        return this.http.post(`${this.API_URI}/movies`, movie);
    }

    updateMovie(id: string | number, movie: Movie): Observable<Movie> {
        return this.http.put(`${this.API_URI}/movies/${id}`, movie);
    }
}
