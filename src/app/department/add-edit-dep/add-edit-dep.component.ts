import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.scss']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }


  @Input()
  dep:any;
  DepartmentId:string="";
  DepartmentName:string="";
  Department: string | undefined;

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
              DepartmentName:this.DepartmentName};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    })

  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
              DepartmentName:this.DepartmentName};
    this.service.updateDepartment(val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
