import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsoDashBoardComponent } from './fso-dash-board.component';

describe('FsoDashBoardComponent', () => {
  let component: FsoDashBoardComponent;
  let fixture: ComponentFixture<FsoDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsoDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsoDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
