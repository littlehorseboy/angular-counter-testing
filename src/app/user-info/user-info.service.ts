import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { delay } from 'rxjs/operators';

interface IUserInfo {
  account: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userInfo: IUserInfo;

  constructor(private httpClient: HttpClient) { }

  getUserInfo() {
    return new Observable((subscriber: Subscriber<IUserInfo>): void => {
      // subscriber.next({
      //   account: 'haha',
      //   name: 'Otis',
      // });
      // subscriber.complete();
      subscriber.error(new Error('what!?'));
      subscriber.complete();
    })
      .pipe(
        delay(1000),
      );
  }

  getUserInfoFromGithub() {
    return this.httpClient.get<{[key: string]: any}>('https://api.github.com/users/littlehorseboy');
  }
}
