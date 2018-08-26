import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalContentComponent } from './goal-content.component';

describe('GoalContentComponent', () => {
  let component: GoalContentComponent;
  let fixture: ComponentFixture<GoalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
