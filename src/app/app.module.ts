import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';


const routerConfig:Routes = [
    {path:'',component:HomeComponent},
    {path:'product/:productTitle',component:ProductDetailComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SearchComponent,
        CarouselComponent,
        ProductComponent,
        StarsComponent,
        ProductDetailComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routerConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
