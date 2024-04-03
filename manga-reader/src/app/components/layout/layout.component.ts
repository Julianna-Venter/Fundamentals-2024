import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  NzContentComponent,
  NzHeaderComponent,
  NzLayoutComponent,
} from 'ng-zorro-antd/layout';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    RouterOutlet,
    NzMenuDirective,
    NzMenuItemComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  authService = inject(AuthService);

  router = inject(Router);

  handleLogout() {
    this.authService.IsLoggedIn(false);
    this.router.navigate(['/login']);
  }
}
