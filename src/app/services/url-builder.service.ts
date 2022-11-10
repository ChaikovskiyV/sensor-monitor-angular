import { Injectable } from '@angular/core';
import { SearchParams } from './search-params';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 4;

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {

  constructor() { }

  public buildIdUrl(url:string, id: number) {
    const delimiter = '/';

    return url + delimiter + id;
  }

  public buildParammeterizedUrl(url:string, searchParams: SearchParams) {
    let parammeterizedUrl = url.concat('?');

    if (searchParams.page) {
      parammeterizedUrl += 'page=' + searchParams.page;
    } else {
      parammeterizedUrl += 'page=' + DEFAULT_PAGE;
    }

    if (searchParams.limit) {
      parammeterizedUrl += '&limit=' + searchParams.limit;
    } else {
      parammeterizedUrl += '&limit=' + DEFAULT_LIMIT;
    }

    if (searchParams.search) {
      parammeterizedUrl += '&search=' + searchParams.search;
    }

    return parammeterizedUrl;
  }
}