import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [NgIf],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.scss',
})
export class GenreComponent {
  @Input('genreName') genre = 'Unknown';

  idNumber = Math.round(Math.random() * 56);
  count = 0;

  constructor() {
    setInterval(() => {
      this.count++;
      this.count %= 60;
    }, this.idNumber * 10);
  }
}
