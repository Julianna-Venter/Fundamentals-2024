import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationIoComponent } from './communication-io.component';

describe('CommunicationIoComponent', () => {
  let component: CommunicationIoComponent;
  let fixture: ComponentFixture<CommunicationIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationIoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunicationIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
