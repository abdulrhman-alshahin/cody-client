import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProblem } from 'src/app/interfaces/problem';
import { ProblemService } from 'src/app/services/problem.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent implements OnInit {
  problem!: IProblem;
  problemId!: string;
  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.problemId = this.route.snapshot.params['id'];
    let problem = this.problemService.getProblemById(this.problemId);
    if (problem) this.problem = problem;
  }
}
