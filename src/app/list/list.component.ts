import { Component } from '@angular/core';
import { TweetsService } from '../services/tweets.service';
import { ListTweetModal } from '../core/models/list-tweet.modal';
import { Subscription } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { TweetModal } from '../core/models/tweet.modal';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public tweets: TweetModal[] = [];
  public searchText = '';
  public subscriptions: Subscription[] = [];

  constructor(private tweetService: TweetsService) {
  }

  public executeSearch() {
    if (!this.searchText) {
      return;
    }
    const querySubscription = this.tweetService.watchQuerySearchTweets(this.searchText)
      .valueChanges.subscribe((response: ApolloQueryResult<ListTweetModal>) => {
        this.tweets = response.data.twitter.search;
      });

    this.subscriptions = [...this.subscriptions, querySubscription];
  }
}


