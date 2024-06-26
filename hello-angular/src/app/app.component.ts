import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CommunicationComponent } from './components/communication/communication.component';
import { EvaluatedAttributesComponent } from './components/evaluated-attributes/evaluated-attributes.component';
import { GenreComponent } from './components/genre/genre.component';
import { SeasonsListComponent } from './components/seasons-list/seasons-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GenreComponent,
    NgFor,
    NgIf,
    EvaluatedAttributesComponent,
    CommunicationComponent,
    SeasonsListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isSeasonlistVisible = true;
  title = 'hello-angular';
  totalGenres = 10;

  series: string[] = [
    'Brooklyn 99',
    'Breaking Bad',
    'The Office',
    'Friends',
    'The Crown',
    'The Mandalorian',
    'The Witcher',
    'Game of Thrones',
  ];
}
