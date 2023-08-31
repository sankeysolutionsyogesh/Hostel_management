import {
  Component,
  Input ,
} from '@angular/core';
import {AnnouncementDetail} from "../../../services/annoucement";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent {

  @Input() AnnouncementList:AnnouncementDetail[] = [];
  @Input() CheckBoxList:any[] = [];

  ArrayList:any = []
  ngOnChanges(){
    console.log("cahnges list",this.AnnouncementList )
  }


  onCheckboxChange(form: NgForm, index: number, event: any) {



      let formData = form.value;
      console.log(`Form data for Announcement No ${index + 1}:`, formData);
      formData.id = index + 1
      // this.ArrayList.splice(index, 1, formData);
      this.AnnouncementList[index] = formData;
      console.log("List ", this.AnnouncementList);


  }




}
