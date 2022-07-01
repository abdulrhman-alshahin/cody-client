interface IComment {
  id: string;
  createrName: string;
  date: string;
  content: string;
}

export interface IPost {
  id: string;
  title: string;
  createrName: string;
  date: string;
  content: string;
  rate: number;
  comments: IComment[];
}
