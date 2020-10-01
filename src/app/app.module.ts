import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieSingleComponent } from './components/movie-single/movie-single.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        MovieFormComponent,
        MovieListComponent,
        MovieSingleComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [MoviesService],
    bootstrap: [AppComponent],
})
export class AppModule {}
