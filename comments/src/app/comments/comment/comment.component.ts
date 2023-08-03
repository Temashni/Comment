import { Component, Input } from "@angular/core";
import { Comment } from "../comment.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {

  @Input()
  comment!: Comment;

  isCreatingReplay = false;

  constructor() {}

  onShowReplay() {
    this.isCreatingReplay = true;
  }

  onClose() {
    this.isCreatingReplay = false;
  }
}