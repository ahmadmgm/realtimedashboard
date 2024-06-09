import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEventWidgetComponent } from './live-event-widget.component';

describe('LiveEventWidgetComponent', () => {
  let component: LiveEventWidgetComponent;
  let fixture: ComponentFixture<LiveEventWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveEventWidgetComponent]
    });
    fixture = TestBed.createComponent(LiveEventWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
