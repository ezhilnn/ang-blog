import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotegoryNavbarComponent } from './cotegory-navbar.component';

describe('CotegoryNavbarComponent', () => {
  let component: CotegoryNavbarComponent;
  let fixture: ComponentFixture<CotegoryNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotegoryNavbarComponent]
    });
    fixture = TestBed.createComponent(CotegoryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
