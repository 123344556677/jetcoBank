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
import AccountsAndBranch from "components/AccountsBranchOffice/AccountsAndBranch";
import AccountCreationListing from "components/AccountsBranchOffice/AccountCreation/AccountCreationListing";
import AddCheckingAccount from "components/AccountsBranchOffice/AccountCreation/CheckingAccounts/AddCheckingAccount";
import AddSavingAccount from "components/AccountsBranchOffice/AccountCreation/SavingAccounts/AddSavingAccount";
import AddCorporateAccount from "components/AccountsBranchOffice/AccountCreation/CorporateAccounts/AddCorporateAccount";
import SoleProprietorAccounts from "components/AccountsBranchOffice/AccountCreation/SoleProprietor/SoleProprietorAccount";
import AddSoleProprietorAccount from "components/AccountsBranchOffice/AccountCreation/SoleProprietor/AddSoleProprietorAccount";
import AddLoanAccount from "components/AccountsBranchOffice/AccountCreation/LoanAccounts/AddLoanAccount";
import AddPlanAccount from "components/AccountsBranchOffice/AccountCreation/PlansAccounts/AddPlanAccount";
import AddMortageAccount from "components/AccountsBranchOffice/AccountCreation/MortageAccounts/AddMortageAccount";
import AddCashManagementAccount from "components/AccountsBranchOffice/AccountCreation/CashManageAccounts/AddCashManagementAccount";
import AddTreasuryManagementAccount from "components/AccountsBranchOffice/AccountCreation/TreasuryManageAccounts/AddTreasuryManagementAccount";
import AddCreditAccount from "components/AccountsBranchOffice/AccountCreation/CreditAccounts/AddCreditAccount";
import AddCreditCardAccount from "components/AccountsBranchOffice/AccountCreation/CreditCardAccounts/AddCreditCardAccount";
import AddPrepaidAccount from "components/AccountsBranchOffice/AccountCreation/PrepaidAccounts/AddPrepaidAccount";
import AddNotForProfitAccount from "components/AccountsBranchOffice/AccountCreation/NotForProfitAccounts/AddNotForProfitAccount";
import AddNonProfitAccount from "components/AccountsBranchOffice/AccountCreation/NonProfitAccounts/AddNonProfitAccount";
import AddCustomAccount from "components/AccountsBranchOffice/AccountCreation/CustomAccounts/AddCustomAccount";
import CheckingAccuntProfile from "components/AccountsBranchOffice/AccountCreation/CheckingAccounts/CheckingAccuntProfile";
import SavingAccountProfile from "components/AccountsBranchOffice/AccountCreation/SavingAccounts/SavingAccountProfile";
import CorporateAccountProfile from "components/AccountsBranchOffice/AccountCreation/CorporateAccounts/CorporateAccountProfile";
import SoleProprietorAccountProfile from "components/AccountsBranchOffice/AccountCreation/SoleProprietor/SoleProprietorAccountProfile";
import LoanAccountProfile from "components/AccountsBranchOffice/AccountCreation/LoanAccounts/LoanAccountProfile";
import PlansAccountProfile from "components/AccountsBranchOffice/AccountCreation/PlansAccounts/PlansAccountProfile";
import MortageAccountProfile from "components/AccountsBranchOffice/AccountCreation/MortageAccounts/MortageAccountProfile";
import CashManagementAccountProfile from "components/AccountsBranchOffice/AccountCreation/CashManageAccounts/CashManagementAccountProfile";
import TreasuryManagementAccountProfile from "components/AccountsBranchOffice/AccountCreation/TreasuryManageAccounts/TreasuryManagementProfile";
import CreditAccountProfile from "components/AccountsBranchOffice/AccountCreation/CreditAccounts/CreditAccountProfile";
import CreditCardAccountProfile from "components/AccountsBranchOffice/AccountCreation/CreditCardAccounts/CreditCardAccountProfile";
import PrepaidAccountProfile from "components/AccountsBranchOffice/AccountCreation/PrepaidAccounts/PrepaidAccountProfile";
import NonProfitAccountProfile from "components/AccountsBranchOffice/AccountCreation/NonProfitAccounts/NonProfitAccountProfile";
import NotForProfitAccountProfile from "components/AccountsBranchOffice/AccountCreation/NotForProfitAccounts/NotForProfitAccountProfile";
import CustomAccountProfile from "components/AccountsBranchOffice/AccountCreation/CustomAccounts/CustomAccountProfile";
import ManageBranchAndOfficesListing from "components/AccountsBranchOffice/ManageBranchOffices/ManageBranchAndOfficesListing";
import RoleManagementListing from "components/AccountsBranchOffice/RoleManagement/RoleManagementListing";
import CreateGroup from "components/AccountsBranchOffice/RoleManagement/CreateGroup";


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
    path: "/accountsAndBranch",
    name: "Accounts, Branch & Office",
    icon: "fa fa-briefcase",
    component:<AccountsAndBranch/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/accountListing",
    name: "AccountListing",
    icon: "ni ni-single-02",
    component:<AccountCreationListing/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addCheckingAccount",
    name: "AddCheckingAccount",
    icon: "ni ni-tv-2 ",
    component:<AddCheckingAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addSavingAccount",
    name: "AddSavingAccount",
    icon: "ni ni-tv-2 ",
    component:<AddSavingAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addCorporateAccount",
    name: "AddCorporateAccount",
    icon: "ni ni-tv-2 ",
    component:<AddCorporateAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addSoleProprietorAccount",
    name: "AddSoleProprietorAccount",
    icon: "ni ni-tv-2 ",
    component:<AddSoleProprietorAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addLoanAccount",
    name: "AddLoanAccount",
    icon: "ni ni-tv-2 ",
    component:<AddLoanAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addPlanAccount",
    name: "AddPlanAccount",
    icon: "ni ni-tv-2 ",
    component:<AddPlanAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addMortageAccount",
    name: "AddMortageAccount",
    icon: "ni ni-tv-2 ",
    component:<AddMortageAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addCashManagementAccount",
    name: "AddCashManagmentAccount",
    icon: "ni ni-tv-2 ",
    component:<AddCashManagementAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addTreasuryManagementAccount",
    name: "AddTreasuryManagmentAccount",
    icon: "ni ni-tv-2 ",
    component:<AddTreasuryManagementAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addCreditAccount",
    name: "AddCreditAccount",
    icon: "ni ni-tv-2 ",
    component:<AddCreditAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addCreditCardAccount",
    name: "AddCreditCardAccount",
    icon: "ni ni-tv-2 ",
    component:<AddCreditCardAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addPrepaidAccount",
    name: "AddPrepaidAccount",
    icon: "ni ni-tv-2 ",
    component:<AddPrepaidAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addNotForProfitAccount",
    name: "AddNotForProfitAccount",
    icon: "ni ni-tv-2 ",
    component:<AddNotForProfitAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addNonProfitAccount",
    name: "AddNonProfitAccount",
    icon: "ni ni-tv-2 ",
    component:<AddNonProfitAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addCustomAccount",
    name: "AddCustomAccount",
    icon: "ni ni-tv-2 ",
    component:<AddCustomAccount/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/checkingAccountProfile",
    name: "ChekcingAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<CheckingAccuntProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/savingAccountProfile",
    name: "SavingAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<SavingAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/corporateAccountProfile",
    name: "CorporateAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<CorporateAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/soleProprietorAccountProfile",
    name: "SoleProprietorAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<SoleProprietorAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/planAccountProfile",
    name: "PlanAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<PlansAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/loanAccountProfile",
    name: "LoanAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<LoanAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/mortageAccountProfile",
    name: "MortageAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<MortageAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/cashManagementAccountProfile",
    name: "CashManagementAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<CashManagementAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/treasuryManagementAccountProfile",
    name: "TreasuryManagementAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<TreasuryManagementAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/creditAccountProfile",
    name: "CreditAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<CreditAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/creditCardAccountProfile",
    name: "CreditCardAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<CreditCardAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/prepaidAccountProfile",
    name: "PrepaidAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<PrepaidAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/nonProfitAccountProfile",
    name: "NonProfitAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<NonProfitAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/notForProfitAccountProfile",
    name: "NotForProfitAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<NotForProfitAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/customAccountProfile",
    name: "CustomAccountProfile",
    icon: "ni ni-tv-2 ",
    component:<CustomAccountProfile/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/manageBranchAndOffices",
    name: "ManageBranchAndOfficesListing",
    icon: "ni ni-tv-2 ",
    component:<ManageBranchAndOfficesListing/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/roleManagementListing",
    name: "RoleManagementListing",
    icon: "ni ni-tv-2 ",
    component:<RoleManagementListing/>,
    layout: "/admin",
  },
  {
    path: "/accountsAndBranch/addGroup",
    name: "CreateGroup",
    icon: "ni ni-tv-2 ",
    component:<CreateGroup/>,
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
