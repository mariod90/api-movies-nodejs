/*import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
    let service: MoviesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MoviesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});*/

/*

import { TestBed } from '@angular/core/testing';
//Http testing module and mocking controller
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import { MoviesService } from './movies.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie } from '../components/models/Movie';

fdescribe('MoviesService', () => {
    let httpClient = HttpClient;
    let httpTestCtrl = HttpTestingController;
    let movieService = MoviesService;

    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MoviesService],
        })
    );

    beforeEach(() => {
        movieService = TestBed.get(MoviesService);
        httpTestCtrl = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
      httpTestCtrl.verify();
    })

    it('should test HttpClient.get', () => {
        const testMovies: Movie[] = [
            {
                id: 16,
                title: 'WWII From Space',
                synopsis:
                    'Esta espectacular producción revela los aspectos clave de la Segunda Guerra Mundial como nunca antes se habían visto',
                image:
                    'https://somosmovies.com/uploads/poster/zqFdWArpcM2RG81XZ4eQX5aDD7T.jpg',
                release_date: '2012-06-09T05:00:00.000Z',
                updated_at: null,
                create_at: new Date('2020-09-28T01:29:16.000Z'),
            },
            {
                id: 15,
                title: 'Pink Floyd: The Wall',
                synopsis:
                    'Película visualmente evocativa, basada en la música del disco homónimo y las visiones del grupo de rock psicodélico "Pink Floyd".',
                image:
                    'https://somosmovies.com/uploads/poster/3QcwzfyIYI8a94yP26jQ2TWsXGI.jpg',
                release_date: '1982-09-02T05:00:00.000Z',
                updated_at: null,
                create_at: new Date('2020-09-28T01:25:13.000Z'),
            },
        ];

        movieService.getMovies().subscribe((movies) => {
            expect(testMovies).toBe(movies, 'should check mocked data');
        });

        const req = httpTestCtrl.expectOne(movieService.API_URL + '/movies');

        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toEqual('json');

        req.flush(testMovies);
        httpTestCtrl.verify();
    });
});
*/
