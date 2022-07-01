import { Component, Input, OnInit } from '@angular/core';
import { IContest } from 'src/app/interfaces/contest';

@Component({
  selector: 'app-contests-card',
  templateUrl: './contests-card.component.html',
  styleUrls: ['./contests-card.component.scss'],
})
export class ContestsCardComponent implements OnInit {
  @Input() contests!: IContest[];
  @Input() status!: string;
  constructor() {}

  ngOnInit(): void {}
}
