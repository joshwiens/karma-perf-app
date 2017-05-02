import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTestcompKComponent } from './is-testcomp-k.component';

describe('IsTestcompKComponent', () => {
  let component: IsTestcompKComponent;
  let fixture: ComponentFixture<IsTestcompKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
