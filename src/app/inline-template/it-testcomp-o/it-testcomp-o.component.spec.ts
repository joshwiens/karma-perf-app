import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTestcompOComponent } from './it-testcomp-o.component';

describe('ItTestcompOComponent', () => {
  let component: ItTestcompOComponent;
  let fixture: ComponentFixture<ItTestcompOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
