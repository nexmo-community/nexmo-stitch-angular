import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConversationComponent } from './conversation/conversation.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
      path: 'conversation',
      component: ConversationComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }