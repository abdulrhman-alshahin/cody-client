import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContestsComponent } from './pages/contests/contests.component';
import { ContestsCardComponent } from './components/contests/contests-card/contests-card.component';
import { PostComponent } from './components/post/post.component';
import { ProblemsComponent } from './pages/problems/problems.component';
import { ProblemComponent } from './pages/problem/problem.component';
import { DetailsComponent } from './components/problem/details/details.component';
import { SubmitComponent } from './components/problem/submit/submit.component';
import { SolutionComponent } from './components/problem/solution/solution.component';
import { CodeEditorComponent } from './components/code-editor/code-editor/code-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MonacoEditorModule, MONACO_PATH } from '@materia-ui/ngx-monaco-editor';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContestComponent } from './pages/contest/contest.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContestsComponent,
    ContestsCardComponent,
    PostComponent,
    ProblemsComponent,
    ProblemComponent,
    DetailsComponent,
    SubmitComponent,
    SolutionComponent,
    CodeEditorComponent,
    BlogsComponent,
    ContestComponent,
    BlogComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MonacoEditorModule],
  providers: [
    {
      provide: MONACO_PATH,
      useValue: 'https://unpkg.com/monaco-editor@0.31.1/min/vs',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
