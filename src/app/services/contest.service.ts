import { Injectable } from '@angular/core';
import { IContest } from '../interfaces/contest';

@Injectable({
  providedIn: 'root',
})
export class ContestService {
  constructor() {}
  private contests: IContest[] = [
    {
      id: '1',
      name: 'cody round 1',
      fromDate: new Date(
        'Wed Jan 22 2022 22:00:00 GMT+0200 (Eastern European Standard Time)'
      ),
      toDate: new Date(
        'Wed Jan 22 2022 1:00:00 GMT+0200 (Eastern European Standard Time)'
      ),
      level: 'hard',
      problemsId: ['1', '2', '3'],
      registereds: [],
    },
    {
      id: '2',
      name: 'cody round 2',
      fromDate: new Date(
        'Wed Jan 16 2022 22:00:00 GMT+0200 (Eastern European Standard Time)'
      ),
      toDate: new Date(
        'Wed Jan 16 2022 23:00:00 GMT+0200 (Eastern European Standard Time)'
      ),

      level: 'intermediate',
      problemsId: ['1', '2', '3'],
      registereds: ['2', '3', '4'],
    },
    {
      id: '3',
      name: 'cody round 3',
      fromDate: new Date(
        'Wed Jan 23 2022 22:00:00 GMT+0200 (Eastern European Standard Time)'
      ),
      toDate: new Date(
        'Wed Jan 23 2022 23:00:00 GMT+0200 (Eastern European Standard Time)'
      ),
      level: 'intermediate',
      problemsId: ['1', '2', '3'],
      registereds: ['2', '3', '4'],
    },
    {
      id: '4',
      name: 'cody round 4',
      fromDate: new Date(
        'Wed April 27 2022 12:00:00 GMT+0200 (Eastern European Standard Time)'
      ),
      toDate: new Date(
        'Wed April 27 2022 15:00:00 GMT+0200 (Eastern European Standard Time)'
      ),
      level: 'intermediate',
      problemsId: ['1', '2', '3'],
      registereds: ['2', '3', '4'],
    },
    {
      id: '4',
      name: 'cody round 4',
      fromDate: new Date(
        'Wed April 27 2022 15:00:00 GMT+0200 (Eastern European Standard Time)'
      ),
      toDate: new Date(
        'Wed April 27 2022 18:00:00 GMT+0200 (Eastern European Standard Time)'
      ),
      level: 'intermediate',
      problemsId: ['1', '2', '3'],
      registereds: ['2', '3', '4'],
    },
  ];

  getUpcomingContest() {
    return this.contests
      .filter((contest) => contest.fromDate.getTime() > new Date().getTime())
      .slice();
  }
  getCurrentContest() {
    return this.contests
      .filter((contest) => contest.fromDate.getTime() < new Date().getTime())
      .filter((contest) => contest.toDate.getTime() > new Date().getTime())
      .slice();
  }
  getPreviousContest() {
    return this.contests
      .filter((contest) => contest.toDate.getTime() < new Date().getTime())
      .slice();
  }
  getContestById(id: string) {
    return this.contests.find((contest) => contest.id === id);
  }
}
