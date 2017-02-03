import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { HomeComponent } from "./pages/home/home.component";
import { ArtistComponent } from "./pages/artist/artist.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "home", component: HomeComponent },
  { path: "artist", component: ArtistComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  HomeComponent,
  ArtistComponent
];