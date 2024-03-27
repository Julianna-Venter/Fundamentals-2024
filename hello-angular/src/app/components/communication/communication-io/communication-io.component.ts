import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-communication-io',
  standalone: true,
  imports: [],
  templateUrl: './communication-io.component.html',
  styleUrl: './communication-io.component.scss',
})
export class CommunicationIoComponent {
  @Input() name = 'Bob the cat';
  @Input() surname?: string;

  response = '';

  @Input() set responseInput(resp: string) {
    if (resp.length > 0) {
      this.response = resp;
    } else {
      this.response = 'No response yet';
    }
  }

  @Output() noticeMe = new EventEmitter<string>();

  noticeMePlz() {
    this.noticeMe.emit(this.name);
  }
}
