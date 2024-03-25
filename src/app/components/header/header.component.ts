import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public header_styles = {
    header_main: 'header_main',
    header_navigation: 'header_navigation',
    header_links_box: 'header_links_box',
    header_links_item: 'header_links_item',
    header_links: 'header_links'
  }

  public pages = [
    {
      link: '/',
      title: 'Home'
    },

    {
      link: '/books',
      title: 'Books'
    },

    {
      link: '/characters',
      title: 'Characters'
    },

    {
      link: '/movies',
      title: 'Movies'
    },

    {
      link: '/potions',
      title: 'Potions'
    },

    {
      link: '/spells',
      title: 'Spells'
    },

    {
      link: '/about',
      title: 'About'
    }
  ]
}
