import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BooksComponent } from './components/pages/books/books.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { PotionsComponent } from './components/pages/potions/potions.component';
import { SpellsComponent } from './components/pages/spells/spells.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'books',
        component: BooksComponent,
        title: 'Livros'
    },
    {
        path: 'characters',
        component: CharactersComponent,
        title: 'Personagens'
    },
    {
        path: 'movies',
        component: MoviesComponent,
        title: 'Filmes'
    },
    {
        path: 'potions',
        component: PotionsComponent,
        title: 'Poções'
    },
    {
        path: 'spells',
        component: SpellsComponent,
        title: 'Feitiços'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'Sobre'
    }
];
