import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['AppointmentNumber', 'PatientName', 'Doctor', 'session'];

  displayColumns: string[] = ['SessionTitle', 'Doctor', 'Schedule'];

}
