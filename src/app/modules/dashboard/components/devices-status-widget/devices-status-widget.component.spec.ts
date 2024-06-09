import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesStatusWidgetComponent } from './devices-status-widget.component';

describe('DevicesStatusWidgetComponent', () => {
  let component: DevicesStatusWidgetComponent;
  let fixture: ComponentFixture<DevicesStatusWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevicesStatusWidgetComponent]
    });
    fixture = TestBed.createComponent(DevicesStatusWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
