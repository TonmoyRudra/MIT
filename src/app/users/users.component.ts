import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  applicantList;
  constructor(public userService : UserService) { }
  mitList;
  paidMit;
  unpaidMit;
  pgitList;
  ngOnInit() {
  this.getAllAplicant();
  }

  getAllAplicant(){
    this.mitList = []
    this.pgitList = []
    this.paidMit = []
    this.unpaidMit = []
    this.userService.getAllApplicant()
      .subscribe( result => {
        this.applicantList = result;
        for (let i = 0; i < this.applicantList.length; i++) {
          if(this.applicantList[i].applicationType == "mit"){
            this.mitList.push(this.applicantList[i])
            if(this.applicantList[i].paymentStatus == true){
              this.paidMit.push(this.applicantList[i])
            }else { 
              this.unpaidMit.push(this.applicantList[i])
            }
            
          }else{
            this.pgitList.push(this.applicantList[i])
          }
          
        }
      })
  }

}
