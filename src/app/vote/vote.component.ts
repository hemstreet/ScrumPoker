import { Component } from '@angular/core';
import { config } from '../config';
import { VoteService } from './vote.service';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  voteValues: any;
  constructor(private voteService: VoteService) {
    let _config = config.config;
    this.voteValues = _config.voteValues;
  }
  voteClicked(vote) {
    this.voteService.vote(vote).then((data) => {
      console.log('Voted', data);
    });
  }
}
