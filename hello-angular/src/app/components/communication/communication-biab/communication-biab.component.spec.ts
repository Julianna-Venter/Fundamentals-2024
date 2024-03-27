import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationBiabComponent } from './communication-biab.component';

describe('CommunicationBiabComponent', () => {
  let component: CommunicationBiabComponent;
  let fixture: ComponentFixture<CommunicationBiabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationBiabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunicationBiabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
