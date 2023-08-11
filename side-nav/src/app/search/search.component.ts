import { Component } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  moviesList: any[] = [];
  searchResult: any[] = [];
  updateFilmSubscription:any;
  
  constructor(private movieService: MovieService, private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.getmovies()
    this.updateFilmSubscription = this.getupcomingmovies();
  }

  async getupcomingmovies() {
    const pagesToFetch = 16;
    this.moviesList = await this.movieService.getupcomingmovies(pagesToFetch);
  
    this.searchResult = this.moviesList;

    this.getmovies()
  }

  async getmovies() {
    const pagesToFetch = 16;
    const tempArray = await this.movieService.getmovies(pagesToFetch);
    
    tempArray.forEach(element => {
      this.moviesList.push(element)
    });
    this.searchResult = this.moviesList;
  }

  onChangeSearchKey(data :string) {
    this.searchResult = this.moviesList.filter(function (str) { return str.originalTitleText.text.includes(data); });
  }
}
