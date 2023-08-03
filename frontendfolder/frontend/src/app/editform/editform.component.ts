import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

export interface Item {
  _id: string;
  name: string;
  position: string;
  salary:Number;

}

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})


export class EditformComponent implements OnInit {

 


  editedItem: Item = {} as Item;


  constructor(private route: ActivatedRoute,  private service:ServiceService) { }

  ngOnInit(): void {

    const itemId = this.route.snapshot.paramMap.get('_id');
    this.service.getemployee().subscribe((items) => {
      this.editedItem = items.data.find((item:any) => item._id === itemId) || ({} as Item);

    });
  }


  
  updateItem(): void {
    
    this.service.updateItem(this.editedItem).subscribe(() => {
      alert('Updated Successfully')
     this.fetchEmployees()
    });
  }

  fetchEmployees() {
    this.service.getemployee().subscribe((data=>{
    }))
  }

}
