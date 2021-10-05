import { Component } from '@angular/core';
import { last, map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UsersComponent } from '../users/users.component';

export interface users {
  last: string;
  first: string;
  action: string;
  status: string;
  clearence: string;
}

const ELEMENT_DATA: users[]= [{last: 'Varghese', first: 'Caleb', action: 'waiting', status:'waiting', clearence: 'none'},
              {last: 'Walker', first: 'Tyler', action: 'cleared', status:'cleared', clearence: 'none'},
              {last: 'Roberts', first: 'Kira', action: 'pending', status:'pending', clearence: 'none'},
              {last: 'Dvertola', first: 'Matt', action: 'forms', status:'waiting', clearence: 'none'},
              {last: 'Arnold', first: 'Tom', action: 'cleared', status:'cleared', clearence: 'none'},
              {last: 'Baker', first: 'Kirsten', action: 'cleared', status:'cleared', clearence: 'none'},
              {last: 'Larkin', first: 'Cindy', action: 'pending', status:'waiting', clearence: 'none'}];

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, content: 'test1'},
          { title: 'Card 2', cols: 1, rows: 1, content: 'test2'},
          { title: 'Card 3', cols: 1, rows: 1, content: 'test3'},
          { title: 'Card 4', cols: 1, rows: 1, content: 'test4'}
        ];
      }

      return [
        { title: 'Projects', cols: 2, rows: 1, content: 'test1'},
        { title: 'Clearances', cols: 1, rows: 1, content: 'test2'},
        { title: 'Tasks', cols: 1, rows: 2, content: 'test3'},
        { title: 'Users', cols: 1, rows: 1, content: 'yello'}
      ];
    })
  );

  dataSource = ELEMENT_DATA;

  constructor(private breakpointObserver: BreakpointObserver) {}
}
