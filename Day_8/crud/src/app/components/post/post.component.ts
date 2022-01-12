import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import Post from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post = new Post();
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  async addPost() {
    await this.postService.addPostToDb(this.post);
    this.posts.push(this.post);
    this.post = new Post();
  }

  async fetchPosts() {
    this.posts = [];

    let res: any = await this.postService.getPosts();

    for (let i = 0; i < res.posts.length; i++) {
      const post = new Post();
      
      post.id = res.posts[i]._id;
      post.title = res.posts[i].title;
      post.content = res.posts[i].content;
      post.createdAt = res.posts[i].createdAt;
      post.updatedAt = res.posts[i].updatedAt;

      this.posts.push(post);
    }
  }
}