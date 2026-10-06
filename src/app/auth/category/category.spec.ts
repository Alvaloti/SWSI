import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category } from './category';
import { AuthService } from '../../service/auth-service';
import { authServiceStub } from '../../testing/auth-service.stub';

describe('Category', () => {
    let component: Category;
    let fixture: ComponentFixture<Category>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Category],
            providers: [{ provide: AuthService, useValue: authServiceStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(Category);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
