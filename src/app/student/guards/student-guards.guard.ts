import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { StudentmoduleService } from '../services/studentmodule.service';


export const studentGuardsGuard: CanActivateFn | any = async () => {
  const router = inject(Router)
  const service = inject(StudentmoduleService)

  const role = 'student'
  service.checkStudentData(role).subscribe(
    {
      next: (data: any) => {

        if (data) {
          return true
        }
        else {
          console.log("Inauthorised")
          router.navigate(['unathorised']);
          return false
        }
      },
      error: error => {
        console.log("Error occurred:", error);
        router.navigate(['unathorised']);
        return false;
      }
    }
  );



}








