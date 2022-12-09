import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessmixinsComponent } from './lessmixins.component';

describe('LessmixinsComponent', () => {
  let component: LessmixinsComponent;
  let fixture: ComponentFixture<LessmixinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessmixinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessmixinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
