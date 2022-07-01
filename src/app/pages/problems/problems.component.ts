import { Component, OnInit } from '@angular/core';
import { IProblem } from 'src/app/interfaces/problem';
import { ProblemService } from 'src/app/services/problem.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss'],
})
export class ProblemsComponent implements OnInit {
  problems!: IProblem[];
  constructor(private problemService: ProblemService) {}

  ngOnInit(): void {
    this.problems = this.problemService.getProblems();
  }
}
