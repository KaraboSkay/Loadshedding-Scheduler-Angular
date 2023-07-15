import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwoComponent } from './screen-two.component';

describe('ScreenTwoComponent', () => {
  let component: ScreenTwoComponent;
  let fixture: ComponentFixture<ScreenTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenTwoComponent]
    });
    fixture = TestBed.createComponent(ScreenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
