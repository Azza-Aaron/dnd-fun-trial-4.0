import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/home/page";
import {NotFound} from "./pages/notFound/page";
import {Login} from "./pages/login/page";
import {Lookup} from "./pages/lookUp/page";
import {DataBank} from "./pages/dataBank/page";
import {MyNavbar} from "./layouts/navbar";
import {MyFooter} from "./layouts/footer";
import {CharacterPage} from "./pages/character/page";
import {ShopPage} from "./pages/shop/page";
import {InventoryPage} from "./pages/inventory/page";
import {QuestPage} from "./pages/quests/page";
import {RulesPage} from "./pages/rules/page";
import {BestiaryPage} from "./pages/bestiary/page";
import {BattlePage} from "./pages/battle/page";
import {Maps} from "./pages/maps/page";
import {WorldBuilding} from "./pages/worldBuilding/page";
import {ProfilePage} from "./pages/profile/page";
import {auth} from "./services/util/authentication";
import {playerDm, username} from "./services/util/userSettings";
import {useState} from "react";
import {MyJournal} from "./pages/journal/page";

function App() {
  const [mode, setMode] = useState(false)
  const authed = auth()
  if(!authed){
    return (
      <>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
  }

  const name = username(authed)
  playerDm(setMode, mode)
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage  name={name} mode={mode} authed={authed}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/lookup" element={<Lookup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/data/bank" element={<DataBank />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/quests" element={<QuestPage name={name} dm={mode} />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/bestiary" element={<BestiaryPage />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/battle" element={<BattlePage name={name} dm={mode} />} />
        <Route path="/world/building" element={<WorldBuilding />} />
        <Route path="/journals" element={<MyJournal name={name} dm={mode} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter setMode={setMode}/>
    </>
  );
}

export default App;
