import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvTableComponent } from './uv-table.component';

describe('UvTableComponent', () => {
  let component: UvTableComponent;
  let fixture: ComponentFixture<UvTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
