import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-disabled-view',
  templateUrl: './student-disabled-view.component.html',
  styleUrls: ['./student-disabled-view.component.css']
})
export class StudentDisabledViewComponent implements OnInit {
  index = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
