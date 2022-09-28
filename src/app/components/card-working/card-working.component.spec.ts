import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWorkingComponent } from './card-working.component';

describe('CardWorkingComponent', () => {
  let component: CardWorkingComponent;
  let fixture: ComponentFixture<CardWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWorkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
