import { Component, Injectable, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filmdetail',
  templateUrl: './filmdetail.component.html',
  styleUrls: ['./filmdetail.component.css']
})
@Injectable()
export class FilmDetailComponent implements OnInit {
  allFilms: any[] = [];
  filmdetails: any;
  updateFilmSubscription:any;
  constructor(private movieService: MovieService, private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.updateFilmSubscription = this.getDetailsFilm();
  }

  async getDetailsFilm() {
    this.route.params.subscribe(async params => {
      const pagesToFetch = 16;
      const filmId = params['id'];
      
      this.allFilms = await this.movieService.getmovies(pagesToFetch);
      var filteredMovieDetails = this.allFilms.filter(x => x.id === filmId);
      
      if (filteredMovieDetails.length > 0) {
        this.filmdetails = filteredMovieDetails[0];
      }
      else {        
        this.allFilms = await this.movieService.getupcomingmovies(pagesToFetch);
        filteredMovieDetails = this.allFilms.filter(x => x.id === filmId);  
        this.filmdetails = filteredMovieDetails[0];
      }
    });
  }

  ngOnDestroy(): void {
    this.updateFilmSubscription.unsubscribe()
  }
}
