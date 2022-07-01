import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPost } from '../interfaces/post';

@Injectable({ providedIn: 'root' })
export class PostsService {
  postsChanged = new Subject<IPost[]>();

  constructor() {}

  private posts: IPost[] = [
    {
      id: '0',
      title: 'About Unrated Educational Cody Round Post(1)',
      createrName: 'MikeMirzayanov',
      date: '19/1/2022',
      content:
        'Hello, Codeforces. Unfortunately, we have to declare the round unrated. Absolutely, these are not issues of the side of Codeforces code, but rather it is a hardware issue. Probably, electricity, power unit or something else. This led to unexpected repeated reboots of the server with the database. I hope that we will be able to quickly deal with this. We apologize to the writers of the round and its participants. P.S. Please, do not downvote the round announcement: the writers are not to blame for what happened. And in general, this time it is difficult to blame someone. Sometimes hardware fails. Mike.',
      rate: 2,
      comments: [
        {
          id: '',
          createrName: 'MikeMirzayanov',
          date: '19/1/2022',
          content: 'this post is good',
        },
        {
          id: '',
          createrName: 'MikeMirzayanov',
          date: '19/1/2022',
          content:
            'this is new comment for showing off lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        },
        {
          id: '',
          createrName: 'MikeMirzayanov',
          date: '19/1/2022',
          content: 'this post is good',
        },
      ],
    },
    {
      id: '1',
      title: 'About Unrated Educational Cody Round 121 Post(2)',
      createrName: 'MikeMirzayanov',
      date: '19/1/2022',
      content:
        'Hello, Codeforces. Unfortunately, we have to declare the round unrated. Absolutely, these are not issues of the side of Codeforces code, but rather it is a hardware issue. Probably, electricity, power unit or something else. This led to unexpected repeated reboots of the server with the database. I hope that we will be able to quickly deal with this. We apologize to the writers of the round and its participants. P.S. Please, do not downvote the round announcement: the writers are not to blame for what happened. And in general, this time it is difficult to blame someone. Sometimes hardware fails. Mike.',
      rate: -3,
      comments: [],
    },
    {
      id: '2',
      title: 'About Unrated Educational Cody Round 121 Post(4)',
      createrName: 'MikeMirzayanov',
      date: '19/1/2022',
      content:
        'Hello, Codeforces. Unfortunately, we have to declare the round unrated. Absolutely, these are not issues of the side of Codeforces code, but rather it is a hardware issue. Probably, electricity, power unit or something else. This led to unexpected repeated reboots of the server with the database. I hope that we will be able to quickly deal with this. We apologize to the writers of the round and its participants. P.S. Please, do not downvote the round announcement: the writers are not to blame for what happened. And in general, this time it is difficult to blame someone. Sometimes hardware fails. Mike.',
      rate: 0,
      comments: [
        {
          id: '',
          createrName: 'MikeMirzayanov',
          date: '19/1/2022',
          content: 'this post is good',
        },
        {
          id: '',
          createrName: 'MikeMirzayanov',
          date: '19/1/2022',
          content: 'this post is good',
        },
      ],
    },
    {
      id: '3',
      title: 'About Unrated Educational Cody Round 121 Post(3)',
      createrName: 'MikeMirzayanov',
      date: '19/1/2022',
      content:
        'Hello, Codeforces. Unfortunately, we have to declare the round unrated. Absolutely, these are not issues of the side of Codeforces code, but rather it is a hardware issue. Probably, electricity, power unit or something else. This led to unexpected repeated reboots of the server with the database. I hope that we will be able to quickly deal with this. We apologize to the writers of the round and its participants. P.S. Please, do not downvote the round announcement: the writers are not to blame for what happened. And in general, this time it is difficult to blame someone. Sometimes hardware fails. Mike.',
      rate: 0,
      comments: [
        {
          id: '',
          createrName: 'MikeMirzayanov',
          date: '19/1/2022',
          content: 'this post is good',
        },
        {
          id: '',
          createrName: 'MikeMirzayanov',
          date: '19/1/2022',
          content: 'this post is good',
        },
        {
          id: '',
          createrName: 'MikeMirzayanov',
          date: '19/1/2022',
          content: 'this post is good',
        },
      ],
    },
  ];

  public getPosts() {
    return this.posts.sort((a, b) => b.rate - a.rate).slice();
  }

  public getPostById(id: string) {
    return this.posts.find((post) => post.id === id);
  }
  public getMostFamousPost() {
    let mostFamousPost = this.posts[0];
    this.posts.forEach((post) => {
      if (post.rate > mostFamousPost.rate) mostFamousPost = post;
    });
    return mostFamousPost;
  }
  public editRate(value: number, id: string) {
    let post = this.getPostById(id);
    if (post) post.rate += value;
    this.postsChanged.next(this.posts.slice());
  }
}
