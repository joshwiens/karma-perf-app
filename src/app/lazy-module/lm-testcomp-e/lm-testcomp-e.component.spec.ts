import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LmTestcompEComponent } from './lm-testcomp-e.component';

describe('Component: LmTestcompEComponent', () => {
  let component: LmTestcompEComponent;
  let fixture: ComponentFixture<LmTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should correctly render the @Input value', () => {
    expect(fixture.debugElement.children[0].nativeElement.innerHTML).toBe('');
    component.testMessage = 'input text';
    fixture.detectChanges();
    expect(fixture.debugElement.children[0].nativeElement.innerHTML).toBe('input text');
  });
});
