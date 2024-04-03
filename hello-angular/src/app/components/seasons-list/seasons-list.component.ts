import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { F1Service } from '../../services/f1.service';

@Component({
  selector: 'app-seasons-list',
  standalone: true,
  imports: [],
  templateUrl: './seasons-list.component.html',
  styleUrl: './seasons-list.component.scss',
})
export class SeasonsListComponent implements OnInit, OnDestroy {
  f1Service = inject(F1Service);
  seasons: string[] = [];
  seasonSubscription: Subscription | undefined;

  ngOnInit(): void {
    //setup code
    this.seasonSubscription = this.f1Service.seasons$.subscribe((seasons) => {
      this.seasons = seasons;
    });
  }

  handleGetSeasonsButtonPress(event: MouseEvent) {
    console.log(event);
    this.f1Service.getSeasons();
  }

  ngOnDestroy(): void {
    //cleanup code
    this.seasonSubscription?.unsubscribe();
  }
}
