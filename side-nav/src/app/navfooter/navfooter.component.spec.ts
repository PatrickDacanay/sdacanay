import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFooterComponent } from './navfooter.component';

describe('FooterComponent', () => {
  let component: NavFooterComponent;
  let fixture: ComponentFixture<NavFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavFooterComponent]
    });
    fixture = TestBed.createComponent(NavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
