import { Component } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { GeneralService } from '../../../services/general.service';
import { Response } from '../../../models/response';

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

  public movies!: Response
  public books_styles = {
    cover_section: 'cover_section',
    cover: 'cover',
    book_info_section: 'book_info_section',
    book_title: 'book_title',
    book_info_summary: 'book_info_summary',
    book_info_details: 'book_info_details',
    book_more: 'book_more'
  }
  private url: string = 'https://api.potterdb.com//v1/movies'

  private catchAllMovies(url: string){
    this.service.getAPI(url).subscribe(
      (movies: Response)=>{
        this.movies = movies
      }
    )
  }
}
