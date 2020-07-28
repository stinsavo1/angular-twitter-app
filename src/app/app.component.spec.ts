import { async, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

class MockRouter {
  navigateByUrl(url: string) {
    return url;
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [
        { provide: Router, useClass: MockRouter }
      ]
    })
      .compileComponents().then(() => {
      const fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should call Router.navigateByUrl("/tweets") on loading', inject([Router], (router: MockRouter) => {
    const spy = spyOn(router, 'navigateByUrl');
    router.navigateByUrl('/tweets');
  }));
});
