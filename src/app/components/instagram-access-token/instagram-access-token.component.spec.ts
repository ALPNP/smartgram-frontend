import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramAccessTokenComponent } from './instagram-access-token.component';

describe('InstagramAccessTokenComponent', () => {
  let component: InstagramAccessTokenComponent;
  let fixture: ComponentFixture<InstagramAccessTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramAccessTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramAccessTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
