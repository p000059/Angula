import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderlistsComponent } from './renderlists.component';

describe('RenderlistsComponent', () => {
  let component: RenderlistsComponent;
  let fixture: ComponentFixture<RenderlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderlistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
