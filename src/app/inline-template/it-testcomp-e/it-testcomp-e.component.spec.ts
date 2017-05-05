import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ItTestcompEComponent } from './it-testcomp-e.component';

describe('Component: ItTestcompEComponent', () => {
  let component: ItTestcompEComponent;
  let fixture: ComponentFixture<ItTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompEComponent);
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
