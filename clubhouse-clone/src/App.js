import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Route path={["/", "/invite", "/code_confirm", "/allow_notification"]}>
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/invite" component={PhoneConfirmation} />
            <Route path="/code_confirm" component={CodeConfirm} />
            <Route path="/allow_notification" component={AllowNotification} />
          </Switch>
        </PlanLayout>
      </Route>
      <Route path={["/home", "/explore", "/profile"]}>
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
