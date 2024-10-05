import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComComponent } from './api-com.component';

describe('ApiComComponent', () => {
  let component: ApiComComponent;
  let fixture: ComponentFixture<ApiComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
