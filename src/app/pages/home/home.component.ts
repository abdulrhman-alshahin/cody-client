import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mostFamousPost!: IPost;
  constructor(private postsService: PostsService) {}
  ngOnInit(): void {
    this.mostFamousPost = this.postsService.getMostFamousPost();
  }
}
