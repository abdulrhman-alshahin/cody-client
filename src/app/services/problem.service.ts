import { Injectable } from '@angular/core';
import { IProblem } from '../interfaces/problem';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  problems: IProblem[] = [
    {
      id: '1',
      code: 'A1',
      createrName: 'Mike Mirzayanov',
      name: 'watermelon',
      points: 1,
      script:
        "One hot summer day Pete and his friend Billy decided to buy a watermelon. They chose the biggest and the ripest one, in their opinion. After that the watermelon was weighed, and the scales showed w kilos. They rushed home, dying of thirst, and decided to divide the berry, however they faced a hard problem. Pete and Billy are great fans of even numbers, that's why they want to divide the watermelon in such a way that each of the two parts weighs even number of kilos, at the same time it is not obligatory that the parts are equal. The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, if they can divide the watermelon in the way they want. For sure, each of them should get a part of positive weight.",
      inputExplain:
        'The first (and the only) input line contains integer number w (1 ≤ w ≤ 100) — the weight of the watermelon bought by the boys.',
      outputExplain:
        'Print YES, if the boys can divide the watermelon into two parts, each of them weighing even number of kilos; and NO in the opposite case.',
      examples: [{ input: ['8'], output: ['YES'] }],
      solved: 1,
      note: 'For example, the boys can divide the watermelon into two parts of 2 and 6 kilos respectively (another variant — two parts of 4 and 4 kilos).',
    },
    {
      id: '2',
      code: 'A2',
      createrName: 'Mike Mirzayanov',
      name: 'Download More RAM',
      points: 2,
      script:
        "Did you know you can download more RAM? There is a shop with n different pieces of software that increase your RAM. The i-th RAM increasing software takes ai GB of memory to run (temporarily, once the program is done running, you get the RAM back), and gives you an additional bi GB of RAM (permanently). Each software can only be used once. Your PC currently has k GB of RAM. Note that you can't use a RAM-increasing software if it takes more GB of RAM to use than what you currently have. Since RAM is the most important thing in the world, you wonder, what is the maximum possible amount of RAM achievable?",
      inputExplain:
        'The first line of each test case contains the integers n and k (1≤n≤100, 1≤k≤1000). Then two lines follow, each containing n integers describing the arrays a and b (1≤ai,bi≤1000).',
      outputExplain:
        'For each test case, output a single line containing the largest amount of RAM you can achieve.',
      examples: [
        { input: ['3 10', '20 30 10', '9 100 10'], output: ['29'] },
        { input: ['5 1', '1 1 5 1 1', '1 1 1 1 1'], output: ['6'] },
        { input: ['5 1', '2 2 2 2 2', '100 100 100 100 100'], output: ['1'] },
        { input: ['5 8', '128 64 32 16 8', '128 64 32 16 8'], output: ['256'] },
      ],
      solved: 2,
      note: 'In the first test case, you only have enough RAM to run the third software initially, but that increases your RAM to 20 GB, which allows you to use the first software, increasing your RAM to 29 GB. The only software left needs 30 GB of RAM, so you have to stop here. In the second test case, you can use the first, second, fourth and fifth software that need only 1 GB of RAM per software to run to increase your RAM to 5 GB, and then use the last remaining one to increase your RAM to 6 GB. In the third test case, all the software need more than 1 GB of RAM to run, so the amount of RAM you have stays at 1 GB.',
    },
    {
      id: '3',
      code: 'A3',
      createrName: 'Mike Mirzayanov',
      name: 'watermelon',
      points: 1,
      script:
        "One hot summer day Pete and his friend Billy decided to buy a watermelon. They chose the biggest and the ripest one, in their opinion. After that the watermelon was weighed, and the scales showed w kilos. They rushed home, dying of thirst, and decided to divide the berry, however they faced a hard problem. Pete and Billy are great fans of even numbers, that's why they want to divide the watermelon in such a way that each of the two parts weighs even number of kilos, at the same time it is not obligatory that the parts are equal. The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, if they can divide the watermelon in the way they want. For sure, each of them should get a part of positive weight.",
      inputExplain:
        'The first (and the only) input line contains integer number w (1 ≤ w ≤ 100) — the weight of the watermelon bought by the boys.',
      outputExplain:
        'Print YES, if the boys can divide the watermelon into two parts, each of them weighing even number of kilos; and NO in the opposite case.',
      examples: [{ input: ['8'], output: ['YES'] }],
      solved: 1,
    },
  ];
  constructor() {}

  getProblems() {
    return this.problems.slice();
  }

  getProblemById(id: string) {
    return this.problems.find((problem) => problem.id === id);
  }
}
