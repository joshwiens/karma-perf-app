import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompFComponent } from './it-testcomp-f.component';

describe('ItTestcompFComponent', () => {
  let component: ItTestcompFComponent;
  let fixture: ComponentFixture<ItTestcompFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
