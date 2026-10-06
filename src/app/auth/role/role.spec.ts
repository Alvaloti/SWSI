import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Role } from './role';
import { AuthService } from '../../service/auth-service';
import { authServiceStub } from '../../testing/auth-service.stub';

describe('Role', () => {
    let component: Role;
    let fixture: ComponentFixture<Role>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Role],
            providers: [{ provide: AuthService, useValue: authServiceStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(Role);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
