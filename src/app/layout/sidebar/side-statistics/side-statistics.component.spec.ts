import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideStatisticsComponent } from './side-statistics.component';

describe('SideStatisticsComponent', () => {
  let component: SideStatisticsComponent;
  let fixture: ComponentFixture<SideStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
