import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventory } from './inventory';
import { AuthService } from '../../service/auth-service';
import { authServiceStub } from '../../testing/auth-service.stub';

describe('Inventory', () => {
    let component: Inventory;
    let fixture: ComponentFixture<Inventory>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Inventory],
            providers: [{ provide: AuthService, useValue: authServiceStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(Inventory);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
