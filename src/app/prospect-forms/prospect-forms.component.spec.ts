import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectFormsComponent } from './prospect-forms.component';

describe('ProspectFormsComponent', () => {
  let component: ProspectFormsComponent;
  let fixture: ComponentFixture<ProspectFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
