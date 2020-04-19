import { TestBed } from '@angular/core/testing';

import { UserInfoService } from './user-info.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserInfoService', () => {
  let service: UserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('使用 getUserInfo() 取得 observable 進行訂閱取得值是否合乎預期', (done: DoneFn) => {
    const expected = {
      account: 'haha',
      name: 'Otis',
    };

    service.getUserInfo().subscribe(
      (value) => {
        expect(value).toEqual(expected);
        expect(service.userInfo).toEqual(expected);
      },
      (error) => {
        expect(error).toEqual(new Error('what!?'));
        done();
      },
      () => {
        expect(service.userInfo).toEqual(expected);
        done();
      },
    );
  });

  it('使用 getUserInfoFromGithub() 取得 httpClient.get() 進行訂閱取得 name 是否為 `馬`', (done: DoneFn) => {
    service.getUserInfoFromGithub().subscribe(
      (value) => {
        expect(value.name).toBe('馬');
        done();
      },
      (error) => {
        expect(error).toEqual(new Error('what!?'));
        done();
      },
    );
  });
});
