import { CanActivateFn , Router, ActivatedRouteSnapshot} from '@angular/router';
import { inject } from '@angular/core';
import { AdminmoduleservicesService } from '../services/adminmoduleservices.service';

export const adminGuardsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const service = inject(AdminmoduleservicesService)

  if (!service.checkAdminExists('admin')) {
    router.navigate(['auth']);
    return false;
  }
  return service.checkAdminExists('admin');

};
