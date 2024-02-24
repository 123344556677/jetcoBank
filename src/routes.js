/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Home from "components/Home/Home";
import UserListing from "components/Users/UserListing";
import AgentListing from "components/Users/AgentListing";
import MerchantListing from "components/Users/MerchantListing";
import NotaryListing from "components/Users/NotaryListing";
import GovtOfficialsListing from "components/Users/GovtOfficialstListing";
import FinancialListing from "components/Users/FinancialListing";
import MinistryListing from "components/Users/MinistryListing";
import userIcon from './assets/img/icons/common/manage-icon.png'
import UserManagement from "components/Users/UserManagement";
import TaxPreparersListing from "components/Users/TaxPreparersListing";
import VendorsListing from "components/Users/VendorsListing";
import CourierDisptachListing from "components/Users/CourierDispatchListing";

var routes = [
  {
    path: "/userManagement",
    name: "User Management",
    icon: "ni ni-single-02",
    component: <UserManagement/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/user",
    name: "UserListing",
    icon: "ni ni-single-02",
    component: <UserListing />,
    layout: "/admin",
  },
  {
    path: "/userManagement/agent",
    name: "AgentListing",
    icon: "ni ni-tv-2 ",
    component: <AgentListing/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/merchant",
    name: "MerchantListing",
    icon: "ni ni-tv-2 ",
    component: <MerchantListing/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/notary",
    name: "NotaryListing",
    icon: "ni ni-tv-2 ",
    component: <NotaryListing/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/govt",
    name: "GovtOfficialsListing",
    icon: "ni ni-tv-2 ",
    component:<GovtOfficialsListing/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/financial",
    name: "FinancialListing",
    icon: "ni ni-tv-2 ",
    component:<FinancialListing/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/ministry",
    name: "MinistryListing",
    icon: "ni ni-tv-2 ",
    component:<MinistryListing/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/taxPreparer",
    name: "TaxPreparerListing",
    icon: "ni ni-tv-2 ",
    component:<TaxPreparersListing/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/vendorandcontactor",
    name: "VendorListing",
    icon: "ni ni-tv-2 ",
    component:<VendorsListing/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/courierandorder",
    name: "CourierDispatchListing",
    icon: "ni ni-tv-2 ",
    component:<CourierDisptachListing/>,
    layout: "/admin",
  },
  {
    path: "/",
    name: "Log Out",
    icon: "fa fa-sign-out",
    component: <Index />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <Profile />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
 
];
export default routes;
