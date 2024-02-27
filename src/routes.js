import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";
// import Home from "components/Home/Home";
import UserListing from "components/Users/User/UserListing";
import AgentListing from "components/Users/Agent/AgentListing";
import MerchantListing from "components/Users/Merchant/MerchantListing";
import NotaryListing from "components/Users/Notary/NotaryListing";
import GovtOfficialsListing from "components/Users/GovtOfficial/GovtOfficialstListing";
import FinancialListing from "components/Users/FinancialInstituition/FinancialListing";
import MinistryListing from "components/Users/Ministry/MinistryListing";
import userIcon from './assets/img/icons/common/manage-icon.png'
import UserManagement from "components/Users/UserManagement";
import TaxPreparersListing from "components/Users/TaxPreparers/TaxPreparersListing";
import VendorsListing from "components/Users/VendorsConractors/VendorsListing";
import CourierDisptachListing from "components/Users/CourierOrder/CourierDispatchListing";
import AddUser from "components/Users/User/AddUser";
import AddAgent from "components/Users/Agent/AddAgent";
import AddMerchant from "components/Users/Merchant/AddMerchant";
import AddMinistry from "components/Users/Ministry/AddMinistry";
import AddNotary from "components/Users/Notary/AddNotary";
import AddRepresentative from "components/Users/TaxPreparers/AddRepresentative";
import AddVendors from "components/Users/VendorsConractors/AddVendors";
import AddContractor from "components/Users/VendorsConractors/AddContractor";
import AddGovtOfficial from "components/Users/GovtOfficial/AddGovtOfficial";
import AddFinancialInstituition from "components/Users/FinancialInstituition/AddFinancialInstituition";
import AddCourier from "components/Users/CourierOrder/AddCourier";
import AddOrder from "components/Users/CourierOrder/AddOrder";
import UserProfile from "components/Users/User/UserProfile";
import AgentProfile from "components/Users/Agent/AgentProfile";
import MerchantProfile from "components/Users/Merchant/MerchantProfile";
import MinistryProfile from "components/Users/Ministry/MinistryProfile";
import NotaryProfile from "components/Users/Notary/NotaryProfile";
import TaxPrepareresProfile from "components/Users/TaxPreparers/TaxPrepareresProfile";
import VendorProfile from "components/Users/VendorsConractors/VendorProfile";
import ContractorProfile from "components/Users/VendorsConractors/ContractorProfile";
import GovtOfficialProfile from "components/Users/GovtOfficial/GovtOfficialProfile";
import FinancialDetails from "components/Users/FinancialInstituition/FinancialDetails";
import CourierOrderView from "components/Users/CourierOrder/CourierOrderView";


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
    path: "/userManagement/addUser",
    name: "AddUser",
    icon: "ni ni-tv-2 ",
    component:<AddUser/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addAgent",
    name: "AddAgent",
    icon: "ni ni-tv-2 ",
    component:<AddAgent/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addMerchant",
    name: "AddMerchant",
    icon: "ni ni-tv-2 ",
    component:<AddMerchant/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addMinistry",
    name: "AddMinistry",
    icon: "ni ni-tv-2 ",
    component:<AddMinistry/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addNotary",
    name: "AddNotary",
    icon: "ni ni-tv-2 ",
    component:<AddNotary/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addRepresentative",
    name: "AddRepresentative",
    icon: "ni ni-tv-2 ",
    component:<AddRepresentative/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addVendor",
    name: "AddVendor",
    icon: "ni ni-tv-2 ",
    component:<AddVendors/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addContractor",
    name: "AddVendor",
    icon: "ni ni-tv-2 ",
    component:<AddContractor/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addOfficial",
    name: "AddOfficial",
    icon: "ni ni-tv-2 ",
    component:<AddGovtOfficial/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addInstituition",
    name: "AddInstituition",
    icon: "ni ni-tv-2 ",
    component:<AddFinancialInstituition/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addCourier",
    name: "AddCourier",
    icon: "ni ni-tv-2 ",
    component:<AddCourier/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/addOrder",
    name: "AddOrder",
    icon: "ni ni-tv-2 ",
    component:<AddOrder/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/userProfile",
    name: "UserProfile",
    icon: "ni ni-tv-2 ",
    component:<UserProfile/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/agentProfile",
    name: "AgentProfile",
    icon: "ni ni-tv-2 ",
    component:<AgentProfile/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/merchantProfile",
    name: "MerchantProfile",
    icon: "ni ni-tv-2 ",
    component:<MerchantProfile/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/ministryProfile",
    name: "MinstryProfile",
    icon: "ni ni-tv-2 ",
    component:<MinistryProfile/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/notaryProfile",
    name: "NotaryProfile",
    icon: "ni ni-tv-2 ",
    component:<NotaryProfile/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/taxPreparersProfile",
    name: "TaxPreparersProfile",
    icon: "ni ni-tv-2 ",
    component:<TaxPrepareresProfile/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/vendorProfile",
    name: "VendorProfile",
    icon: "ni ni-tv-2 ",
    component:<VendorProfile/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/contractorProfile",
    name: "ContractorProfile",
    icon: "ni ni-tv-2 ",
    component:<ContractorProfile/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/govtOfficialProfile",
    name: "GovtOfficialProfile",
    icon: "ni ni-tv-2 ",
    component:<GovtOfficialProfile/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/financialDetail",
    name: "FinancialDetails",
    icon: "ni ni-tv-2 ",
    component:<FinancialDetails/>,
    layout: "/admin",
  },
  {
    path: "/userManagement/couriersAndorders",
    name: "CouriersAndOrders",
    icon: "ni ni-tv-2 ",
    component:<CourierOrderView/>,
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
