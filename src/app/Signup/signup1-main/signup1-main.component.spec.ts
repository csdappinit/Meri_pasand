import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup1MainComponent } from './signup1-main.component';

describe('Signup1MainComponent', () => {
  let component: Signup1MainComponent;
  let fixture: ComponentFixture<Signup1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Signup1MainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Signup1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
