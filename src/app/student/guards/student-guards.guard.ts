import { CanActivateFn , Router, ActivatedRouteSnapshot} from '@angular/router';
import { inject } from '@angular/core';
import { StudentmoduleService } from '../services/studentmodule.service';


export const studentGuardsGuard: CanActivateFn = (route, state , next = ActivatedRouteSnapshot,) => {
  const router = inject(Router)
  const service = inject(StudentmoduleService)

  if (!service.checkStudentExists('Student')) {
    router.navigate(['auth']);
    return false;
  }
  return service.checkStudentExists('Student');

};

