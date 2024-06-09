import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBarWidgetComponent } from './single-bar-widget.component';

describe('SingleBarWidgetComponent', () => {
  let component: SingleBarWidgetComponent;
  let fixture: ComponentFixture<SingleBarWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBarWidgetComponent]
    });
    fixture = TestBed.createComponent(SingleBarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
