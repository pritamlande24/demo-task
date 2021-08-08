import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudentViewComponent } from './teacher-student-view.component';

describe('TeacherStudentViewComponent', () => {
  let component: TeacherStudentViewComponent;
  let fixture: ComponentFixture<TeacherStudentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
