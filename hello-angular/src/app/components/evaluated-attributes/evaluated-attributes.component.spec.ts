import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatedAttributesComponent } from './evaluated-attributes.component';

describe('EvaluatedAttributesComponent', () => {
  let component: EvaluatedAttributesComponent;
  let fixture: ComponentFixture<EvaluatedAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluatedAttributesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluatedAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
