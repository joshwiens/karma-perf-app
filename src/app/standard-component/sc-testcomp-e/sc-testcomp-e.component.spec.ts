import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ScTestcompEComponent } from './sc-testcomp-e.component';

describe('Component: ScTestcompEComponent', () => {
  let component: ScTestcompEComponent;
  let fixture: ComponentFixture<ScTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompEComponent);
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
