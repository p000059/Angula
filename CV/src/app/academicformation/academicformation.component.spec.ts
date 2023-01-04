import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicformationComponent } from './academicformation.component';

describe('AcademicformationComponent', () => {
  let component: AcademicformationComponent;
  let fixture: ComponentFixture<AcademicformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
