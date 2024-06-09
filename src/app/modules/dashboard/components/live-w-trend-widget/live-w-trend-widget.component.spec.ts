import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWTrendWidgetComponent } from './live-w-trend-widget.component';

describe('LiveWTrendWidgetComponent', () => {
  let component: LiveWTrendWidgetComponent;
  let fixture: ComponentFixture<LiveWTrendWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveWTrendWidgetComponent]
    });
    fixture = TestBed.createComponent(LiveWTrendWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
