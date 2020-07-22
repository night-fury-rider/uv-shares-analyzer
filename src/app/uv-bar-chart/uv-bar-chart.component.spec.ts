import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvBarChartComponent } from './uv-bar-chart.component';

describe('UvBarChartComponent', () => {
  let component: UvBarChartComponent;
  let fixture: ComponentFixture<UvBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
