import { Injectable } from '@angular/core';
import { StudentDetails } from './student-details.model';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor() { }

  formData:StudentDetails=new StudentDetails();
}
