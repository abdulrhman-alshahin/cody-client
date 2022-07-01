import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/problem/details/details.component';
import { SolutionComponent } from './components/problem/solution/solution.component';
import { SubmitComponent } from './components/problem/submit/submit.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContestComponent } from './pages/contest/contest.component';
import { ContestsComponent } from './pages/contests/contests.component';
import { HomeComponent } from './pages/home/home.component';
import { ProblemComponent } from './pages/problem/problem.component';
import { ProblemsComponent } from './pages/problems/problems.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogComponent },
  { path: 'contests', component: ContestsComponent },
  { path: 'contests/:id', component: ContestComponent },
  { path: 'problems', component: ProblemsComponent },
  {
    path: 'problems/:id',
    component: ProblemComponent,
    children: [
      { path: 'details', component: DetailsComponent },
      { path: 'submit', component: SubmitComponent },
      { path: 'solution', component: SolutionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
