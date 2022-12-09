import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessvariableComponent } from './lessvariable.component';

describe('LessvariableComponent', () => {
  let component: LessvariableComponent;
  let fixture: ComponentFixture<LessvariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessvariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
