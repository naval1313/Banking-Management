import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./PAGES/Home"
import Ragistration from "./PAGES/Ragistration";
import Dashboard from "./Dashboard";
import MyAccount from "./PAGES/MyAccount";
import Deposite from "./PAGES/Deposite";
import ResetPsss from "./PAGES/ResetPsss";
import MyWithdraw from "./PAGES/MyWithdraw";
import MyCurrentBalance from "./PAGES/MyCurrentBalance";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ragistration" element={<Ragistration />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/dash" element={<Dashboard />}>
            <Route path="myacc" element={<MyAccount />} />

            <Route path="depo" element={<Deposite />} />
            <Route path="resetpass" element={<ResetPsss />} />
            <Route path="withdrawl" element={<MyWithdraw />} />
            <Route path="currbalance" element={<MyCurrentBalance/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
