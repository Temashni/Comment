import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { CommentService } from "./comment.service";
import { Comment } from "./comment.model";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class Comments {
  commentList: Comment[] = this.commentService.commentList;

  constructor(
    private commentService: CommentService
  ) {}

}