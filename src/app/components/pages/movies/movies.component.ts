import { Component } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { GeneralService } from '../../../services/general.service';
import { Response } from '../../../models/response';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  constructor(
    private service: GeneralService
  ) {
    this.catchAllMovies(this.url)
  }

  public movies: Movie[] = []
  public movies_styles = {
    poster_section: 'poster_section',
    poster: 'poster',
    movie_info_section: 'movie_info_section',
    movie_title: 'movie_title',
    movie_info_summary: 'movie_info_summary',
    movie_info_details: 'movie_info_details',
    movie_more: 'movie_more'
  }
  private url: string = 'https://api.potterdb.com//v1/movies'

  private catchAllMovies(url: string){
    this.service.getAPI(url).subscribe(
      (movies: Response)=>{
        movies.data.forEach((movie)=>{
          if(movie.type === 'movie'){
            const movie_attributes = movie.attributes as Movie

            this.movies.push(movie_attributes)
          }
        })
      }
    )
  }
}
