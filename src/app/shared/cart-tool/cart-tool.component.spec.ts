import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartToolComponent } from './cart-tool.component';

describe('CartToolComponent', () => {
  let component: CartToolComponent;
  let fixture: ComponentFixture<CartToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
