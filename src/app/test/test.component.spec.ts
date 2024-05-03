import { TestBed, async } from '@angular/core/testing';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create the TestComponent component', () => {
    expect(component).toBeTruthy();
  });
});