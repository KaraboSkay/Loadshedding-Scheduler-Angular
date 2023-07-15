import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneComponent } from './screen-one.component';

describe('ScreenOneComponent', () => {
  let component: ScreenOneComponent;
  let fixture: ComponentFixture<ScreenOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenOneComponent]
    });
    fixture = TestBed.createComponent(ScreenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
