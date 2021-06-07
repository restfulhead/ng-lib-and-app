import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibExampleComponent } from './lib-example.component';

describe('LibExampleComponent', () => {
  let component: LibExampleComponent;
  let fixture: ComponentFixture<LibExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
