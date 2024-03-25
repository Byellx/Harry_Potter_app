import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { GeneralService } from '../../../services/general.service';
import { Response } from '../../../models/response';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    NgClass,
    NgFor
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  constructor(private service: GeneralService){
    this.catchAllBooks(this.url)
  }

  public books!: Response
  public books_styles = {
    cover_section: 'cover_section',
    cover: 'cover',
    book_info_section: 'book_info_section',
    book_title: 'book_title',
    book_info_summary: 'book_info_summary',
    book_info_details: 'book_info_details',
    book_more: 'book_more'
  }
  private url: string = 'https://api.potterdb.com/v1/books'

  private catchAllBooks(url: string){
    this.service.getAllBooks(url).subscribe(
      (books: Response) =>{
        this.books = books
      }
    )
  }
}
