import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "home", component: HomeComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  HomeComponent
];