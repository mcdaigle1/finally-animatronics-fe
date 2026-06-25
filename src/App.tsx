import { useState } from "react";
import LeftNav from "./components/navbars/LeftNav";
import HomeContent from "./components/content/HomeContent";
import AccountContent from "./components/content/AccountContent";
import SettingsContent from "./components/content/SettingsContent";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState("home");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <LeftNav
            selectedNavItem={selectedNavItem}
            onSelectNavItem={setSelectedNavItem}
          />
        </div>

        <div className="col">
          {selectedNavItem === "home" && <HomeContent />}
          {selectedNavItem === "account" && <AccountContent />}
          {selectedNavItem === "settings" && <SettingsContent />}
        </div>
      </div>
    </div>
  );
}

export default App;