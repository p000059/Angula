import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherLifeCicleComponent } from './father-life-cicle.component';

describe('FatherLifeCicleComponent', () => {
  let component: FatherLifeCicleComponent;
  let fixture: ComponentFixture<FatherLifeCicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherLifeCicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherLifeCicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
