import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDisabledViewComponent } from './student-disabled-view.component';

describe('StudentDisabledViewComponent', () => {
  let component: StudentDisabledViewComponent;
  let fixture: ComponentFixture<StudentDisabledViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDisabledViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDisabledViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
