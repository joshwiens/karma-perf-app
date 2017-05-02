import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompUComponent } from './al-testcomp-u.component';

describe('AlTestcompUComponent', () => {
  let component: AlTestcompUComponent;
  let fixture: ComponentFixture<AlTestcompUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
