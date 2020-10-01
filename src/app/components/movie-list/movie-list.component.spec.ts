/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
    let component: MovieListComponent;
    let fixture: ComponentFixture<MovieListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MovieListComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});*/

/*import {
    ComponentFixture,
    TestBed,
    fakeAsync,
    tick,
} from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { MoviesService } from '../../services/movies.service';

import { of } from 'rxjs';

const mockMoviesList = [
    {
        id: 16,
        title: 'WWII From Space',
        synopsis:
            'Esta espectacular producción revela los aspectos clave de la Segunda Guerra Mundial como nunca antes se habían visto',
        image:
            'https://somosmovies.com/uploads/poster/zqFdWArpcM2RG81XZ4eQX5aDD7T.jpg',
        release_date: '2012-06-09T05:00:00.000Z',
        updated_at: null,
        create_at: '2020-09-28T01:29:16.000Z',
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
        create_at: '2020-09-28T01:25:13.000Z',
    },
];

fdescribe("MovieListComponent", () => {
  let component = MovieListComponent;
  let fixture = ComponentFixture<MovieListComponent>;
  let mockList = mockMoviesList;
  let testService: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      providers: [MoviesService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    testService = TestBed.get(MoviesService);
  });

  it('testing subscribe method is getting called', fakeAsync(() => {
    let movieSpy = spyOn(testService, "getListMovies").and.returnValue(of(mockList));
    let subSpy = spyOn(testService.getMovies(), 'subscribe');
    component.ngOnInit();
    tick();
    expect(movieSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  it('testing execution within subscribe method', fakeAsync(() => {
    //fixture.detectChanges()
    component.ngOnInit();
    expect(component.tempMovieList).toBeDefined();
    expect(component.tempMovieList.length).toBeGreaterThan(2);
  }));

});*/

import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Movie } from '../models/Movie';
import { MoviesService } from '../../services/movies.service';

//Testing of MovieService
describe('MovieService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let movieService: MoviesService;

    beforeEach(() => {
        //Configures testing app module
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MoviesService],
        });

        //Instantaites HttpClient, HttpTestingController and MovieService
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        movieService = TestBed.inject(MoviesService);
    });

    afterEach(() => {
        httpTestingController.verify(); //Verifies that no requests are outstanding.
    });

    describe('#getAllMovies', () => {
        let expectedMovies: Movie[];

        beforeEach(() => {
            //Dummy data to be returned by request.
            expectedMovies = [
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
        });

        //Test case 1
        it('should return expected movies by calling once', () => {
            movieService
                .getMovies()
                .subscribe(
                    (movies) =>
                        expect(movies).toEqual(
                            expectedMovies,
                            'should return expected movies'
                        ),
                    fail
                );

            const req = httpTestingController.expectOne(
                movieService.API_URI + '/movies'
            );
            expect(req.request.method).toEqual('GET');

            req.flush(expectedMovies); //Return expectedEmps
        });

        //Test case 2
        it('should be OK returning no movie', () => {
            movieService
                .getMovies()
                .subscribe(
                    (movie) =>
                        expect(movie.length).toEqual(
                            0,
                            'should have empty movies array'
                        ),
                    fail
                );

            const req = httpTestingController.expectOne(
                movieService.API_URI + '/movies'
            );
            req.flush([]); //Return empty data
        });

        //Test case 3
        /*it('should turn 404 error into an empty movie result', () => {
            movieService
                .getMovies()
                .subscribe(
                    (movies) =>
                        expect(movies.length).toEqual(
                            0,
                            'should return empty movies array'
                        ),
                    fail
                );

            const req = httpTestingController.expectOne(
                movieService.API_URI + '/movies'
            );

            const msg = '404 error';
            req.flush(msg, { status: 404, statusText: 'Not Found' }); //Return error
        });*/

        //Test case 3
        it('should return expected movies when called multiple times', () => {
            movieService.getMovies().subscribe();
            movieService
                .getMovies()
                .subscribe(
                    (movies) =>
                        expect(movies).toEqual(
                            expectedMovies,
                            'should return expected movies'
                        ),
                    fail
                );

            const requests = httpTestingController.match(
                movieService.API_URI + '/movies'
            );
            expect(requests.length).toEqual(2, 'calls to getMovies()');

            requests[0].flush([]); //Return Empty body for first call
            requests[1].flush(expectedMovies); //Return expectedEmps in second call
        });
    });
});
