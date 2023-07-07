import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { ViewAttemptsComponent } from './pages/admin/view-attempts/view-attempts.component';
import { AddCodingQuestionComponent } from './pages/admin/add-coding-question/add-coding-question.component';
import { StartCodingComponent } from './pages/user/start-coding/start-coding.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },{
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'categories',
        component:ViewCategoriesComponent,
      },
      {
        path:'add-category',
        component: AddCategoryComponent
      },{
        path:'quizzes',
        component:ViewQuizzesComponent,
      },
      {
        path:'add-quiz',
        component:AddQuizComponent,
      },{
        path:'quiz/:quid',
        component:UpdateQuizComponent
      },{
        path:'view-questions/:quid/:title',
        component:ViewQuizQuestionsComponent
      },{
        path:'add-question/:quid/:title',
        component:AddQuestionComponent
      },{
        path:'add-coding-question/:quid/:title',
        component:AddCodingQuestionComponent
      },{
        path:'question/:quid/:title/:quesid',
        component:UpdateQuestionComponent
      },{
        path:'view-attempts/:quid',
        component:ViewAttemptsComponent
      }
    ],
  },{
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:':catId',
        component:LoadQuizComponent
      },{
        path:'instructions/:quid',
        component:InstructionsComponent
      },
    ]
  },{
      path:"start/:quid",
      component:StartComponent,
      canActivate:[NormalGuard],
  },{
    path:"start-coding/:quid",
    component:StartCodingComponent,
    canActivate:[NormalGuard],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
