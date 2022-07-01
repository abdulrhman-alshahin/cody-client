export interface IProblem {
  id: string;
  name: string;
  code: string;
  createrName: string;
  script: string;
  points: number;
  inputExplain: string;
  outputExplain: string;
  examples: { input: string[]; output: string[] }[];
  solved: number;
  note?: string;
}
