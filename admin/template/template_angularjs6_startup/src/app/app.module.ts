// Core Module
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title }    from '@angular/platform-browser';
import { AppRoutingModule }        from './app-routing.module';
import { NgbModule }               from '@ng-bootstrap/ng-bootstrap';
import { NgModule }                from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule, MatTableModule }    from '@angular/material';
import * as global from './config/globals';

// Main Component
import { AppComponent }          from './app.component';
import { HeaderComponent }       from './components/header/header.component';
import { SidebarComponent }      from './components/sidebar/sidebar.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { TopMenuComponent }      from './components/top-menu/top-menu.component';
import { FooterComponent }       from './components/footer/footer.component';
import { PanelComponent }        from './components/panel/panel.component';

// Component Module
import { NvD3Module }           from 'ng2-nvd3';
import { AgmCoreModule }        from '@agm/core';
import { CalendarModule }       from 'angular-calendar';
import { FullCalendarModule }   from 'ng-fullcalendar';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgxChartsModule }      from '@swimlane/ngx-charts';
import { NgxDatatableModule }   from '@swimlane/ngx-datatable';
import { TrendModule }          from 'ngx-trend';
import { HighlightJsModule }    from 'ngx-highlight-js'
import { CountdownModule }      from 'ngx-countdown';
import { ChartsModule }         from 'ng4-charts/ng4-charts';
import { TagsInputModule }      from 'ngx-tags-input/dist';
import { Ng2TableModule }       from 'ngx-datatable/ng2-table';

// Pages
import { HomePage }          from './pages/home/home';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    FooterComponent,
    PanelComponent,

    HomePage
  ],
  imports: [
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyC5gJ5x8Yw7qP_DqvNq3IdZi2WUSiDjskk' }),
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule.forRoot(),
    CountdownModule,
    ChartsModule,
    FullCalendarModule,
    FormsModule,
    HighlightJsModule,
    NgbModule.forRoot(),
    NgxChartsModule,
    NvD3Module,
    ReactiveFormsModule,
    SlimLoadingBarModule.forRoot(),
    TrendModule,
    TagsInputModule.forRoot(),
    NgxDatatableModule,
    MatSortModule,
    MatTableModule,
    Ng2TableModule
  ],
  providers: [ Title ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        var title = 'Color Admin | ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
      }
    });
  }
}
