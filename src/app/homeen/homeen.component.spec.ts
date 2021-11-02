import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeenComponent } from './homeen.component';

describe('HomeenComponent', () => {
  let component: HomeenComponent;
  let fixture: ComponentFixture<HomeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
