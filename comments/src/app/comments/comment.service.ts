import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Comment } from "./comment.model";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  commentList: Comment[] = [];

  constructor() {
    this.commentList = JSON.parse(localStorage.getItem('comment') || '[]');
    console.log(this.commentList)
  }

  createComment(text: string, comment?: Comment) {
    if (comment) {
      this.createReplayComment(comment, text);
    } else {
      this.createMainComment(text);
    }

    localStorage.setItem('comment', JSON.stringify(this.commentList));
    console.log(this.commentList)
  }

  private createMainComment(text: string) {
    this.commentList.push(new Comment(text));
  }

  private createReplayComment(comment: Comment, text: string) {
    comment.createReplay(text);
  }
}
