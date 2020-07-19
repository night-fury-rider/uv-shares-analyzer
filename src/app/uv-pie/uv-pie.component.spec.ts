import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvPieComponent } from './uv-pie.component';

describe('UvPieComponent', () => {
  let component: UvPieComponent;
  let fixture: ComponentFixture<UvPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
