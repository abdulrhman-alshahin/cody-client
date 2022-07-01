import { IProblem } from './problem';
import { IUser } from './user';

interface IResult {
  problemId: string;
  userId: string;
  status: 'done' | 'fail' | 'untouched';
}

export interface IContest {
  id: string;
  name: string;
  fromDate: Date;
  toDate: Date;
  level: string;
  problemsId: string[];
  registereds: string[];
  results?: IResult[];
}
