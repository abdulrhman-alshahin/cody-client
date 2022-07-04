import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { IProblem } from 'src/app/interfaces/problem';
import { ProblemService } from 'src/app/services/problem.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss'],
})
export class ProblemsComponent implements OnInit {
  problems!: IProblem[];
  public columnDefs: ColDef[] = [
    { field: 'code' },
    { field: 'name' },
    { field: 'points' },
    { field: 'solved' },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  constructor(private problemService: ProblemService) {}
  ngOnInit(): void {
    this.problems = this.problemService.getProblems();
    console.log(this.problems);
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
}
