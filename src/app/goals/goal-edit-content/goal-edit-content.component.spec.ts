import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalEditContentComponent } from './goal-edit-content.component';

describe('GoalEditContentComponent', () => {
  let component: GoalEditContentComponent;
  let fixture: ComponentFixture<GoalEditContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalEditContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalEditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
