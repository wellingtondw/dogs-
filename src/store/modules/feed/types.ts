export enum ActionTypes {
  getFeedListRequest = 'GET_FEED_LIST_REQUEST',
  getFeedListSuccess = 'GET_FEED_LIST_SUCCESS',
  getFeedListFailure = 'GET_FEED_LIST_FAILURE'
}

export interface IFeedItem {
  acessos: string;
  author: string;
  date: string;
  id: number;
  idade: string;
  peso: string;
  src: string;
  title: string;
  total_comments: string;
}

export interface IFeedState {
  items: IFeedItem[];
  loading: boolean;
  error?: Error
}
