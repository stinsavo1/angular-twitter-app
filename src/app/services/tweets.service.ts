import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { searchQuery } from './gql';

@Injectable()
export class TweetsService {
  constructor(private apollo: Apollo) {
  }

  public watchQuerySearchTweets(searchText: string) {
    return this.apollo.watchQuery({
      query: searchQuery,
      variables: {
        term: searchText
      },
    });
  }
}
