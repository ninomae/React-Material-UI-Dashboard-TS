import * as React from "react";
// import PropTypes from "prop-types";
// import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// import { withStyles } from "material-ui";

// import { Header, Footer, Sidebar } from "components";


// import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";

// import image from "assets/img/sidebar-2.jpg";
// import logo from "assets/img/reactlogo.png";

class Dashboard extends React.Component {
  state = {
    mobileOpen: false
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    /*
    return this.props.location.pathname !== "/maps";
    */
  }
  componentDidMount() {
    if(navigator.platform.indexOf('Win') > -1){
      // eslint-disable-next-line
      /*
      const ps = new PerfectScrollbar(this.refs.mainPanel);
      */
    }
  }
  componentDidUpdate() {
    // this.refs.mainPanel.scrollTop = 0;
  }
  render() {
    // const {...rest } = this.props;
    return (
      <div> 
{/*       
        <Sidebar
          routes={dashboardRoutes}
          logoText={"Creative Tim"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
        </div> */}
      </div>
    );
  }
}
export default Dashboard;
