import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CommentService } from "../comment.service";
import { Comment } from "../comment.model";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {

  @Input()
  comment?: Comment;

  @Output()
  onClose = new EventEmitter();

  form: FormGroup = new FormGroup({
    comment: new FormControl('', Validators.required)
  });

  constructor(
    private commentService: CommentService
  ) {}

  createComment() {
    this.commentService.createComment(this.form.get('comment')?.value, this.comment);
    this.form.reset();
    this.onClose.emit();
  }
}