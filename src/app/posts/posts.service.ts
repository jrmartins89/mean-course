import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from './post.model';

//it provides this service on the root level and it only creates one instance of the service for the whole app
@Injectable({providedIn:'root'})

export class PostsService{
  private posts: Post[]=[];
  private postsUpdated = new Subject<Post[]>();

  getPosts(){
    // return [...this.posts]
    // this return is using the spread operator. the square brackets create a new array and the ... takes all the
    //elements of the posts array, pulls them out of it and add them to the new array. using this the array is copied, not the object
    return [...this.posts];
  }

  getPostsUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPosts(title: string, content: string){
    const post: Post={title:title,content:content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
