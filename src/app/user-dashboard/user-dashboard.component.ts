import {ChangeDetectionStrategy,Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserDashboardComponent implements OnInit {
  constructor() { }
   displayedColumns: string[] = ['last', 'first', 'action', 'status', 'clearence'];
   ngOnInit(): void {}
   dataSource = ELEMENT_DATA;
}

export interface users {
  last: string;
  first: string;
  action: string;
  status: string;
  clearence: string;
}

const ELEMENT_DATA: users[] = [
  {last: 'Varghese', first: 'Caleb', action: 'waiting', status:'waiting', clearence: 'none'},
  {last: 'Walker', first: 'Tyler', action: 'cleared', status:'cleared', clearence: 'none'},
  {last: 'Roberts', first: 'Kira', action: 'pending', status:'pending', clearence: 'none'},
  {last: 'Dvertola', first: 'Matt', action: 'forms', status:'waiting', clearence: 'none'},
  {last: 'Arnold', first: 'Tom', action: 'cleared', status:'cleared', clearence: 'none'},
  {last: 'Baker', first: 'Kirsten', action: 'cleared', status:'cleared', clearence: 'none'},
  {last: 'Larkin', first: 'Cindy', action: 'pending', status:'waiting', clearence: 'none'},
];
