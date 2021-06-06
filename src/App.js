import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/Footer";
import BookingSlot from "./component/BookingSlot";
import Header from "./component/Header";
import { Container } from "@material-ui/core";
import Protected from "./component/Protected";
import LandingPage from "./pages/LandingPage";
import InstructorsPage from "./pages/InstructorsPage";
import ProfilePage from "./pages/ProfilePage";
import ConfrimSlotPage from "./pages/ConfrimSlotPage";
import BookingProcess from "./component/BookingProcess";
import Booking2 from "./component/Booking2";
import PaymentPage from "./pages/PaymentPage";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/instructors" component={InstructorsPage} />
          {/* <Route exact path="/booking" component={BookingSlot} /> */}
          <Route exact path="/confirmslot" component={ConfrimSlotPage} />

          <Route path="/payment">
            <Protected cmp={PaymentPage} />
          </Route>
          <Route exact path="/signup" component={Signup} />

          {/* <Route exact path="/payment" component={PaymentPage} /> */}
          <Route exact path="/booking" component={Booking2} />
          <Route exact path="/:profileId/profile" component={ProfilePage} />
          {/* <Route exact path="/booking/:profileId/:classes_type" component={BookingProcess} /> */}

          <Route exact path="/datepicker" component={BookingProcess} />
          <Route exact path="/:profileId" component={ProfilePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
