import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationBlockComponent } from './pagination-block.component';

describe('PaginationBlockComponent', () => {
  let component: PaginationBlockComponent;
  let fixture: ComponentFixture<PaginationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
