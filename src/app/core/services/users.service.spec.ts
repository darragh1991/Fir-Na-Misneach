import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting,  } from '@angular/common/http/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UsersService } from './users.service';


describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
     providers: [
      UsersService,
      provideHttpClient(withFetch()),
      provideHttpClientTesting(),
     ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
