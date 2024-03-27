import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluated-attributes',
  standalone: true,
  imports: [],
  templateUrl: './evaluated-attributes.component.html',
  styleUrl: './evaluated-attributes.component.scss',
})
export class EvaluatedAttributesComponent {
  color = 'black';
  selected = 0;
  type = 'text';

  changeColor() {
    if (this.color === 'black') {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
  }
}
