import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { StudentmoduleService } from '../services/studentmodule.service';


export const studentGuardsGuard: CanActivateFn | any = async () => {
  const router = inject(Router)
  const service = inject(StudentmoduleService)

  service.checkStudentData('student').subscribe(
    {
      next: (data: any) => {
        console.log("return data ", data)
        if (data)  return data;
        else {
          router.navigate(['unathorised']);
          return data

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








