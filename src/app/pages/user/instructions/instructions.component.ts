import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit{
  qid:any;
  quiz:any;
  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _router:Router
  ){

  }
  ngOnInit(): void {
    this.qid=this._route.snapshot.params['quid'];
    this._quiz.getQuiz(this.qid).subscribe((data:any)=>{
    this.quiz=data;
    console.log(this.quiz)
    console.log("Compo"+JSON.stringify(this.quiz));
    },(error)=>{
      alert("Error in loading data");
    });
  }

  startQuiz(){
    Swal.fire({
      title:'Do you want to start the quiz now?',
      showCancelButton:true,
      confirmButtonText:'Start',
      confirmButtonColor:'#3085d6',
      denyButtonText:'No',
      icon:'question'
    }).then((result)=>{
      if(result.isConfirmed){
        this._router.navigate(['/start/'+this.qid]);
      }
    });
  }

}
