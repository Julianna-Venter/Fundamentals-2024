import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-communication-biab',
  standalone: true,
  imports: [],
  templateUrl: './communication-biab.component.html',
  styleUrl: './communication-biab.component.scss',
})
export class CommunicationBiabComponent {
  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  decreaseSize() {
    this.resize(-1);
  }

  increaseSize() {
    this.resize(1);
  }

  resize(delta: number) {
    this.size = Math.max(8, Math.min(40, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
