import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit{
  categories=[
  //   {
  //   cid:1,
  //   title:'Mathematics',
  //   description: 'this is a testing category'
  // },
  // {
  //   cid:3,
  //   title:'Chemistry',
  //   description: 'this is a testing category'
  // },
  ];
  constructor(private _category:CategoryService){}
  ngOnInit(): void {
   this._category.categories().subscribe((data:any)=>{
    this.categories=data;
    console.log(this.categories);
   },
   (error)=>{
    console.log(error);
    Swal.fire({
      icon:'error',
      title:'Error loading the data',
      confirmButtonText:'OK',
      confirmButtonColor:'#3085d6',
      showCancelButton:false
    });
   });
  }

  deleteCategory(cid:any){
    Swal.fire({
      icon:'question',
      title:'Are you sure you want to delete the category?',
      confirmButtonText:'Delete',
      confirmButtonColor:'#3085d6',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._category.deleteCategory(cid).subscribe((data)=>{
          this.categories=this.categories.filter((category)=>category['cid']!=cid);
          Swal.fire({
            icon:'success',
            title:'Successfully deleted the category',
            confirmButtonText:'OK',
            confirmButtonColor:'#3085d6',
            showCancelButton:false
          });
        },(error)=>{
          console.log(error);
          Swal.fire({
            icon:'error',
            title:'Error in deleting category',
            confirmButtonText:'OK',
            confirmButtonColor:'#3085d6',
            showCancelButton:false
          });
        });
      }
    });

   
  }

}
