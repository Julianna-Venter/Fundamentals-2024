import { Component } from '@angular/core';
import { SharedVarService } from '../../../services/shared-var.service';

@Component({
  selector: 'app-communication-service',
  standalone: true,
  imports: [],
  templateUrl: './communication-service.component.html',
  styleUrl: './communication-service.component.scss',
})
export class CommunicationServiceComponent {
  constructor(protected sharedService: SharedVarService) {}

  changeActor() {
    if (this.sharedService.actor === 'Hello') {
      this.sharedService.actor = 'Goodbye';
    } else {
      this.sharedService.actor = 'I can say hello again!';
    }
  }
}
