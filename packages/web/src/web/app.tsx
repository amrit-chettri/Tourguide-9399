import { Redirect, Route, Switch } from "wouter";
import Index from "./pages/index";
import GuidesPage from "./pages/guides";
import DestinationPage from "./pages/destination";
import PlanPage from "./pages/plan";
import EnquiryPage from "./pages/enquiry";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/"><Redirect to="/home" replace /></Route>
        <Route path="/home" component={Index} />
        <Route path="/guides" component={GuidesPage} />
        <Route path="/plan" component={PlanPage} />
        <Route path="/enquiry" component={EnquiryPage} />
        <Route path="/destinations/:slug" component={DestinationPage} />
        <Route path="/how-it-works" component={Index} />
        <Route path="/contact" component={Index} />
        <Route><Redirect to="/home" replace /></Route>
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
