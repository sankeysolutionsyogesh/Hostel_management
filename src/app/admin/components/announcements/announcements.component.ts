import { Component } from '@angular/core';
import {AnnoucementService} from "../../services/annoucement.service";
import {AnnouncementDetail} from "../../services/annoucement";

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent {

  AnnouncementList : AnnouncementDetail[] = [{}]
  CheckBoxList:any= []

  constructor(private AnnoucementService:AnnoucementService) {
  }


  addAnnoucemnetList(){

    this.AnnouncementList.push({});
  }

  deleteAnnoucemnet(){

    let arr:any[] = []

    arr = this.AnnouncementList.filter(item => !item.checkbox)

    console.log("Array of delete", arr)
    this.AnnouncementList = arr

  }

  onSubmit(){

    const DataArray:AnnouncementDetail[] = []
    this.AnnouncementList.forEach((item, index)=>{
      if(item.checkbox){
        DataArray.push(item)
      }
    })

    this.AnnoucementService.addannouncement(DataArray).then(()=>{
      console.log("Successfully ")
      this.onReset()
    }).catch(()=>{
      console.log("Failed")
    })
  }

  onReset(){
    this.AnnouncementList.pop()

  }
}
