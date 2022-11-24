import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithParamenterComponent } from './page-with-paramenter.component';

describe('PageWithParamenterComponent', () => {
  let component: PageWithParamenterComponent;
  let fixture: ComponentFixture<PageWithParamenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithParamenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWithParamenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
