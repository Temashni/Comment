import * as moment from "moment";

export class Comment {
  id: string;
  userName: string = 'Artem';
  text: string;
  date = moment(new Date()).fromNow();
  replays: Comment[] = [];

  // get timeAgo() {
  //   return 
  // }

  constructor(text: string) {
    this.text = text;
    this.id = Math.random().toString(16).slice(2);
  }

  createReplay(text: string) {
    this.replays.push(new Comment(text));
  }
}