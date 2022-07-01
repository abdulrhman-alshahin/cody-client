import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContest } from 'src/app/interfaces/contest';
import { IProblem } from 'src/app/interfaces/problem';
import { ContestService } from 'src/app/services/contest.service';
import { ProblemService } from 'src/app/services/problem.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
})
export class ContestComponent implements OnInit {
  contest!: IContest;
  contestId!: string;
  contestProblems: IProblem[] = [];
  constructor(
    private contestService: ContestService,
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.contestId = this.route.snapshot.params['id'];
    let contest = this.contestService.getContestById(this.contestId);
    if (contest) this.contest = contest;
    this.contest.problemsId.forEach((problemId) => {
      let problem = this.problemService.getProblemById(problemId);
      if (problem !== undefined) this.contestProblems.push(problem);
      // if (problem) this.contestProblems.push(problem);
    });
  }
}
