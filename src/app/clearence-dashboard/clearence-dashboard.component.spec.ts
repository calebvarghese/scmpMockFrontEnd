import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearenceDashboardComponent } from './clearence-dashboard.component';

describe('ClearenceDashboardComponent', () => {
  let component: ClearenceDashboardComponent;
  let fixture: ComponentFixture<ClearenceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearenceDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearenceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
