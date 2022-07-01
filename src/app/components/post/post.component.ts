import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post!: IPost;
  @Input() withControlers: boolean = true;
  @Input() darkMode: boolean = false;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}
  editRate(value: number) {
    this.postsService.editRate(value, this.post.id);
  }
}
