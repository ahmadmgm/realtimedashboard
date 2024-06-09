import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHazardousTimelineWedgitComponent } from './people-hazardous-timeline-wedgit.component';

describe('PeopleHazardousTimelineWedgitComponent', () => {
  let component: PeopleHazardousTimelineWedgitComponent;
  let fixture: ComponentFixture<PeopleHazardousTimelineWedgitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleHazardousTimelineWedgitComponent]
    });
    fixture = TestBed.createComponent(PeopleHazardousTimelineWedgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
