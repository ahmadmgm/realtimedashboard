import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBoardEventWidgetComponent } from './site-board-event-widget.component';

describe('SiteBoardEventWidgetComponent', () => {
  let component: SiteBoardEventWidgetComponent;
  let fixture: ComponentFixture<SiteBoardEventWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteBoardEventWidgetComponent]
    });
    fixture = TestBed.createComponent(SiteBoardEventWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
