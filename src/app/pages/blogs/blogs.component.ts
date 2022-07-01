import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContest } from 'src/app/interfaces/contest';
import { IPost } from 'src/app/interfaces/post';
import { IUser } from 'src/app/interfaces/user';
import { ContestService } from 'src/app/services/contest.service';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit, OnDestroy {
  posts!: IPost[];
  private postSubscription!: Subscription;
  incomingContest!: IContest[];
  topRated!: IUser[];
  constructor(
    private postsService: PostsService,
    private contestService: ContestService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postSubscription = this.postsService.postsChanged.subscribe(() => {
      this.posts = this.postsService.getPosts();
    });
    this.incomingContest = this.contestService.getUpcomingContest();
    this.topRated = this.userService.getTopRated();
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
