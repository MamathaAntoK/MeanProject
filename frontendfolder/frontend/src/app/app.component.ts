import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';
import { Item } from './editform/editform.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  items: Item[] = [];
  
  username!: string;
  password!: string;
  isAdmin: boolean=false;
  employees!: any[];
  newEmployee: any = {};
  isUser:boolean=false;
login:boolean=true;
isAdmintable:boolean=false;
  window: any;
  updatetable:boolean=false;
  constructor(private http: HttpClient,
    private route:Router,private service:ServiceService) {}
logi={
  username:'',
  password:''
}
  employee = {
    name: '',
    position: '',
    salary: 0,
  };
  us:any;
  ngOnInit(){
  
  }


  
  loginsub() {
    this.service.loginuser(this.logi).subscribe(
         (res) => {
           localStorage.setItem('token', res.token);
   
           if(this.logi.username=='admin@gmail.com' && this.logi.password=='admin123'){
            
             alert('Admin successfully login');
             this.isAdmin=true;
            this.isAdmintable=true
             this.login=false;
             
             this.fetchEmployees();
           
         }else if(this.logi.username=='user@gmail.com' && this.logi.password=='user1234'){
           alert('User successfully login');
          
           this.isAdmin=false;
           this.isAdmintable=false;
           this.isUser=true
           this.login=false;
           this.fetchEmployees();
           
         }
         },
         (error) => {
           console.log('Error creating employee:', error);
         }
       );
     
      
     }
   
     fetchEmployees() {
     
       localStorage.getItem('token');
   
       this.service.getemployee().subscribe((data=>{
         this.items=data.data;
      
       }))
     }
    
   
   
   
   
   
     fetchuser(){
      
     
       this.service.getemployee().subscribe((data=>{
         this.items=data.data;
   
       }))
     }
   
     addEmployee() {
       this.service.addemployee(this.employee).subscribe(
         (res) => {
           console.log(res)
           console.log('Employee added successfully');
         alert('Employee added successfully');
         this.fetchEmployees()
          
         },
         (error) => {
           console.log('Error adding employee:', error);
         }
       );
     }
   
   
   
     deleteItem(itemId: string): void {
       this.service.deleteItem(itemId).subscribe(() => {
         this.items = this.items.filter((item) => item._id !== itemId);
         alert('Deleted Successfully')
       });
     }
   
   dis(){
     this.updatetable=true
   }

   logout(){
    location.reload();
   }
}
