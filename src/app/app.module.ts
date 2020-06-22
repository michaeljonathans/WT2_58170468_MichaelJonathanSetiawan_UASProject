import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DigimonComponent } from "./digimon/digimon.component";
import { DigimonDetailComponent } from "./digimon/digimon-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular"; 

import Theme from "@nativescript/theme";
Theme.setMode(Theme.Dark);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        DigimonComponent,
        DigimonDetailComponent,
        LoginComponent,
        ShellComponent,
        AboutComponent
    ],
    providers: [],
    exports: [
        ShellComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
