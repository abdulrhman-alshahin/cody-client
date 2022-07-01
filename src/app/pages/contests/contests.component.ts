import { Component, OnInit } from '@angular/core';
import { IContest } from 'src/app/interfaces/contest';
import { ContestService } from 'src/app/services/contest.service';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss'],
})
export class ContestsComponent implements OnInit {
  upcomingContests!: IContest[];
  currentContests!: IContest[];
  previousContests!: IContest[];
  constructor(private contestService: ContestService) {}

  ngOnInit(): void {
    this.upcomingContests = this.contestService.getUpcomingContest();
    this.currentContests = this.contestService.getCurrentContest();
    this.previousContests = this.contestService.getPreviousContest();
  }
}
