import { Component, Injectable, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
@Injectable()
export class ContentComponent implements OnInit {
  addedmovie: any[] = [];
  topratedfilm: any[] = [];
  constructor(private movieService: MovieService) {

  }


  ngOnInit() {
    this.getupcomingmovies();
    this.getmovies()
  }

  async getupcomingmovies() {
    const pagesToFetch = 16;
    this.addedmovie = await this.movieService.getupcomingmovies(pagesToFetch);
  }

  async getmovies() {
    const pagesToFetch = 16;
    this.topratedfilm = await this.movieService.getmovies(pagesToFetch);
  }
}
