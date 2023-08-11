import { Injectable } from '@angular/core';
import axios from 'axios';


const titleUrl = 'https://moviesdatabase.p.rapidapi.com/titles';
const upcomingUrl = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const detailUrl = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const typeUrl = 'https://moviesdatabase.p.rapidapi.com/titles/%7Bid%7D';
const searchUrl = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D';

const headers = {
  'X-RapidAPI-Key': '0b8f89c5a4mshcc009e25f7f49a1p165381jsnc4e731d3cf3e',
  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
};

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor() { }

  async getmovies(pagesToFetch: number): Promise<any[]> {
    try {
      const movies = [];
      const response = await axios.get(`${titleUrl}?limit=${pagesToFetch}`, { headers });

      if (response.data.results && Array.isArray(response.data.results)) {
        for (const movie of response.data.results) {
          if (movie.primaryImage !== null) {
            movies.push(movie);
          }
        }
      } else {
        console.error('Error fetching movies - Invalid response:', response.data);
      }

      return movies;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  }

  async getupcomingmovies(pagesToFetch: number): Promise<any[]> {
    try {
      const movies = [];
      const response = await axios.get(`${upcomingUrl}?limit=${pagesToFetch}`, { headers });

      if (response.data.results && Array.isArray(response.data.results)) {

        for (const movie of response.data.results) {

          if (movie.primaryImage !== null) {
            movies.push(movie);
          }
        }
      } else {
        console.error('Error fetching upcoming movies - Invalid response:', response.data);
      }

      return movies;

    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
      return [];
    }
  }

  async getmoviedetails() {

    try {
      const response = await axios.get(detailUrl, { headers });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movie with ID:', error);
      return null;
    }
  }

  async getmovieType(movID: string) {
    try {
      const url = typeUrl.replace('%7Bid%7D', movID);
      const response = await axios.get(url, { headers });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movie with ID:', error);
      return null;
    }
  }

  async searchMovie(movtit: string) {
    try {
      const url = searchUrl.replace('%7Btitle%7D', movtit);
      const response = await axios.get(url, { headers });
      return response.data.results[0];
    } catch (error) {
      console.error('Error fetching movie title:', error);
      return null;
    }
  }
}
