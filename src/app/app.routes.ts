// import { Routes } from '@angular/router';
// import { AboutUsComponent } from './components/about-us/about-us.component';
// import { ContactUsComponent } from './components/contact-us/contact-us.component';
// import { FleetComponent } from './components/fleet/fleet.component';
// import { ServicesComponent } from './components/services/services.component';
// import { SignInComponent } from './components/sign-in/sign-in.component';
// import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
// import { BookComponent } from './components/book/book.component';
// import { ViewDetailsComponent } from './components/view-details/view-details.component';
// import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
// import { GuideManagementComponent } from './components/guide-management/guide-management.component';
// import { CarManagementComponent } from './components/car-management/car-management.component';
// import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
// import { ProfileManagementComponent } from './components/profile-management/profile-management.component';
// import { BookingManagementComponent } from './components/booking-management/booking-management.component';
// import { CarAvailabilityComponent } from './components/car-availability/car-availability.component';
// import { GuideAvailabilityComponent } from './components/guide-availability/guide-availability.component';

// export const routes: Routes = [
//     { path: 'about', component: AboutUsComponent },
//     { path: 'home', component: HomeComponent },
//     { path: 'contact', component: ContactUsComponent },
//     { path: 'fleet', component: FleetComponent },
//     { path: 'service', component: ServicesComponent },
//     { path: 'signin', component: SignInComponent },
//     { path: 'login', component: LoginComponent },
//     { path: 'book', component: BookComponent },
//     { path: 'details', component: ViewDetailsComponent },

//     // Admin Dashboard routes
//     {
//         path: 'admin-dashboard', component: AdminDashboardComponent, children: [
//             { path: 'guide-management', component: GuideManagementComponent },
//             { path: 'car-management', component: CarManagementComponent },
//             { path: '', redirectTo: 'guide-management', pathMatch: 'full' } // Default route for admin dashboard
//         ]
//     },

//     // User Dashboard routes
//     {
//         path: 'user-dashboard', component: UserDashboardComponent, children: [
//             { path: 'profile-management', component: ProfileManagementComponent },
//             { path: 'booking-management', component: BookingManagementComponent },
//             { path: 'car-availability', component: CarAvailabilityComponent },
//             { path: 'guide-availability', component: GuideAvailabilityComponent },
//             { path: '', redirectTo: 'profile-management', pathMatch: 'full' } // Default route for user dashboard
//         ]
//     },
// ];
import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { ServicesComponent } from './components/services/services.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BookComponent } from './components/book/book.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { GuideManagementComponent } from './components/guide-management/guide-management.component';
import { CarManagementComponent } from './components/car-management/car-management.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProfileManagementComponent } from './components/profile-management/profile-management.component';
import { BookingManagementComponent } from './components/booking-management/booking-management.component';
import { CarAvailabilityComponent } from './components/car-availability/car-availability.component';
import { GuideAvailabilityComponent } from './components/guide-availability/guide-availability.component';



CarAvailabilityComponent

export const routes: Routes = [

    {path:'about' , component:AboutUsComponent},
    {path:'home' , component:HomeComponent},
    {path:'contact' , component:ContactUsComponent},
    {path:'fleet' , component:FleetComponent},
    {path:'service' , component:ServicesComponent},
    {path:'signin' , component:SignInComponent},
    {path:'login' , component:LoginComponent},
    {path:'book' , component:BookComponent},
    {path:'details' , component:ViewDetailsComponent},
    {path:'adminhome' , component:AdminDashboardComponent},
    {path:'admin-dashboard' , component:AdminDashboardComponent},
    {path:'guide-management' , component:GuideManagementComponent},
    {path:'car-management' , component:CarManagementComponent},
    { path: 'profile-management', component: ProfileManagementComponent },
    { path: 'booking-management', component: BookingManagementComponent },
    { path: 'car-availability', component: CarAvailabilityComponent },
    { path: 'guide-availability', component: GuideAvailabilityComponent },
    { path: 'user-dashboard', component: UserDashboardComponent}

   
];

