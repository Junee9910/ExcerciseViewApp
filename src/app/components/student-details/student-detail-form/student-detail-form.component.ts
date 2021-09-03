import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from '../../../services/student-details.service';

@Component({
  selector: 'app-student-detail-form',
  templateUrl: './student-detail-form.component.html',
  styles: [
  ]
})
export class StudentDetailFormComponent implements OnInit {

  constructor(public service:StudentDetailsService) { }

  ngOnInit(): void {
  }

}
