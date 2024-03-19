/*eslint-disable*/
import { useState } from "react";
import {
  NavLink as NavLinkRRD,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import sidebarLogo from "../../assets/img/brand/jetcoLogo.png";
import filterIcon from "../../assets/img/icons/common/filter-icon.png";
import "./Sidebar.css";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";
import DyamicAccordion from "components/Accordion/DyamicAccordion";
import { UserAccordionItems } from "mock-data/AccordionData";
import { AccountBranchAccordionItems } from "mock-data/AccordionData";
import { LogisticsAndSupportItems } from "mock-data/AccordionData";
import { FinServicingAndMessagingItems } from "mock-data/AccordionData";
import { BusinessAndTaxItems } from "mock-data/AccordionData";
import { OtherFinAndLegalItems } from "mock-data/AccordionData";
import SystemSettings from "components/SystemSettings/SystemSettings";
import { SystemSettingsItems } from "mock-data/AccordionData";
import LogOutModal from "components/Modals/LogOutModal";

var ps;

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  // const toggleAccordion = () => setIsOpen(!isOpen);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (name) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  // creates the links that appear in the left menu / Sidebar
  const createNavLink = (prop) => {
    const linkTo =
      prop?.name === "Log Out" ? prop.path : prop.layout + prop.path;
    const isActive = prop?.layout + prop?.path === location?.pathname;

    const handleAccordionIcon = (name) => {
      return activeAccordion === name ? "ni ni-bold-up" : "ni ni-bold-down";
    };

    return (
      <NavLink
        to={linkTo}
        tag={NavLinkRRD}
        onClick={closeCollapse}
        className={`sidebar-container ${isActive ? "active" : ""}`}
      >
        <i
          className={`${prop.icon} ${
            isActive ? "sidebar-icon-active" : "sidebar-icon"
          }`}
        />
        <span
          className={`ml-3 sidebar-items ${
            isActive ? "sidebar-items-active" : ""
          }`}
          onClick={() => handleAccordionToggle(prop.name)}
        >
          {prop.name}
        </span>

        {(prop?.name === "User Management" ||
          prop?.name === "Accounts, Branch & Office" ||
          (prop?.name === "Logistics & Support") |
            (prop?.name === "Fin. Services & Messaging") ||
          prop?.name === "Business & Tax Services" ||
          prop?.name === "Other Fin. & Legal" ||
          prop?.name === "System Settings") && (
          <i
            className={`${handleAccordionIcon(prop.name)} ${
              isActive ? "sidebar-icon-active ml-2" : "sidebar-icon ml-2"
            }`}
            onClick={() => handleAccordionToggle(prop.name)}
          />
        )}
        {
          // isActive && (
          //       <span
          //         className="small-circle ml-3"
          //         style={{ backgroundColor: "#91DF46" }}
          //       ></span>
          //     )
        }
      </NavLink>
    );
  };

  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (
        [
          "AgentListing",
          "MerchantListing",
          "NotaryListing",
          "GovtOfficialsListing",
          "FinancialListing",
          "MinistryListing",
          "UserListing",
          "TaxPreparerListing",
          "VendorListing",
          "CourierDispatchListing",
          "AddUser",
          "AddAgent",
          "AddMerchant",
          "AddMinistry",
          "AddRepresentative",
          "AddVendor",
          "AddNotary",
          "AddContractor",
          "AddOfficial",
          "AddInstituition",
          "AddCourier",
          "AddOrder",
          "UserProfile",
          "AgentProfile",
          "MerchantProfile",
          "NotaryProfile",
          "MinstryProfile",
          "ContractorProfile",
          "VendorProfile",
          "TaxPreparersProfile",
          "GovtOfficialProfile",
          "CouriersAndOrders",
          "FinancialDetails",
        ].includes(prop?.name)
      ) {
        return null; // Skip rendering for certain routes
      }

      return (
        <NavItem key={key}>
          {prop?.name === "Dashboard" && <>{createNavLink(prop)}</>}
          {prop?.name === "User Management" && (
            <>
              {createNavLink(prop)}
              <DyamicAccordion
                isOpenVal={activeAccordion === "User Management"}
                accordionVal={UserAccordionItems}
              />
            </>
          )}
          {prop?.name === "Accounts, Branch & Office" && (
            <>
              {createNavLink(prop)}
              <DyamicAccordion
                isOpenVal={activeAccordion === "Accounts, Branch & Office"}
                accordionVal={AccountBranchAccordionItems}
              />
            </>
          )}
          {prop?.name === "Logistics & Support" && (
            <>
              {createNavLink(prop)}
              <DyamicAccordion
                isOpenVal={activeAccordion === "Logistics & Support"}
                accordionVal={LogisticsAndSupportItems}
              />
            </>
          )}
          {prop?.name === "Fin. Services & Messaging" && (
            <>
              {createNavLink(prop)}
              <DyamicAccordion
                isOpenVal={activeAccordion === "Fin. Services & Messaging"}
                accordionVal={FinServicingAndMessagingItems}
              />
            </>
          )}
          {prop?.name === "Business & Tax Services" && (
            <>
              {createNavLink(prop)}
              <DyamicAccordion
                isOpenVal={activeAccordion === "Business & Tax Services"}
                accordionVal={BusinessAndTaxItems}
              />
            </>
          )}
          {prop?.name === "Other Fin. & Legal" && (
            <>
              {createNavLink(prop)}
              <DyamicAccordion
                isOpenVal={activeAccordion === "Other Fin. & Legal"}
                accordionVal={OtherFinAndLegalItems}
              />
            </>
          )}
          {prop?.name === "System Settings" && (
            <>
              {createNavLink(prop)}
              <DyamicAccordion
                isOpenVal={activeAccordion === "System Settings"}
                accordionVal={SystemSettingsItems}
              />
            </>
          )}
          {prop?.name === "Log Out" && createNavLink(prop)}
        </NavItem>
      );
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src={sidebarLogo}
              onClick={() => navigate("/")}
            />
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle
              nav
              className="navbar-bell-icon-holder mr-3 position-relative"
            >
              <i className="ni ni-bell-55 navbar-bell-icon mb-1" />

              <Badge
                className="noti-badge position-absolute top-0 end-0 mb-0  rounded-pill"
                size="sm"
              >
                3
              </Badge>
            </DropdownToggle>
            {
              // <DropdownMenu
              //   aria-labelledby="navbar-default_dropdown_1"
              //   className="dropdown-menu-arrow"
              //   right
              // >
              //   <DropdownItem>Action</DropdownItem>
              //   <DropdownItem>Another action</DropdownItem>
              //   <DropdownItem divider />
              //   <DropdownItem>Something else here</DropdownItem>
              // </DropdownMenu>
            }
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <div className="position-relative">
                  <img
                    alt="..."
                    src={require("../../assets/img/theme/team-4-800x800.jpg")}
                    className="navbar-profile-icon"
                  />
                  <span className="online-badge position-absolute top-0 end-0  rounded-circle" />
                </div>
                <Media className="ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm font-weight-bold navbar-profile-name">
                    Jessica Jones
                  </span>
                </Media>
              </Media>
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={toggleModal}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to="/">
                      <img alt={logo.imgAlt} src={sidebarLogo} />
                    </Link>
                  ) : (
                    <a href="/">
                      <img alt={logo.imgAlt} src={sidebarLogo} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className=" navbar-search navbar-search-dark mt-4 mb-3 d-md-none">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <Input
                  placeholder="Search"
                  type="text"
                  className="navbar-search"
                />
              </InputGroup>
            </FormGroup>
          </Form>
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
        </Collapse>
      </Container>
      <LogOutModal modalOpen={modalOpen} toggleModal={toggleModal} />
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
