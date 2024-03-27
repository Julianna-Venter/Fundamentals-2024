import { Component } from '@angular/core';
import { CommunicationIoComponent } from './communication-io/communication-io.component';
import { CommunicationServiceComponent } from './communication-service/communication-service.component';
import { CommunicationBiabComponent } from './communication-biab/communication-biab.component';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [
    CommunicationIoComponent,
    CommunicationServiceComponent,
    CommunicationBiabComponent,
  ],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss',
})
export class CommunicationComponent {
  chat = 'Parent: who wants to go first?';
  response = `...`;
  fontSizePx = 16;
  user = {
    name: 'Julianna',
    surname: 'Venter',
  };

  addNaggingChildMessage(child: string) {
    this.chat += `Child: ${child}, reporting for duty! Parent: Who's next?`;
    this.response = `Oh hi, ${child}!`;
  }
}
