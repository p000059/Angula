import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizedcurriculumComponent } from './summarizedcurriculum.component';

describe('SummarizedcurriculumComponent', () => {
  let component: SummarizedcurriculumComponent;
  let fixture: ComponentFixture<SummarizedcurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarizedcurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummarizedcurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
