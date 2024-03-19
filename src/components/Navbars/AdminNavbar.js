import { Link } from "react-router-dom";
import "./Navbar.css";
import filterIcon from "../../assets/img/icons/common/filter-icon.png";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Badge,
} from "reactstrap";
import LogOutModal from "components/Modals/LogOutModal";
import { useState } from "react";

const AdminNavbar = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar
        className="navbar-top navbar-dark bg-white admin-navbar"
        expand="md"
        id="navbar-main"
      >
        <Container fluid>
          <Link
            className="navbar-username mb-0  d-none d-lg-inline-block"
            to="/"
          >
            Hello Jackson!
            <p className="login-time">1:45 pm 19 Jan 2022</p>
          </Link>

          <Form className="navbar-search  form-inline mr-4 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <Input
                  placeholder={`Search ${props.brandText}`}
                  type="text"
                  className="navbar-search"
                />
                <InputGroupAddon addonType="prepend" className="searchbar-icon">
                  <InputGroupText>
                    <img src={filterIcon} alt="filter-icon" className="pr-2" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>

          <Nav className="align-items-center d-none d-md-flex" navbar>
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
              <DropdownToggle className="pr-0" nav>
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
        </Container>
        <LogOutModal modalOpen={modalOpen} toggleModal={toggleModal} />
      </Navbar>
    </>
  );
};

export default AdminNavbar;
