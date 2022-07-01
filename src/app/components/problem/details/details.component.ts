import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProblem } from 'src/app/interfaces/problem';
import { ProblemService } from 'src/app/services/problem.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  problem!: IProblem;
  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let problem = this.problemService.getProblemById(
      this.route.snapshot.parent?.params['id']
    );
    if (problem) this.problem = problem;
    // console.log(this.route.snapshot.parent?.params['id']);
  }
}
