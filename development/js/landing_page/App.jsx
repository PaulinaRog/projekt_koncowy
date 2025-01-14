import React from "react";
import { createRoot } from "react-dom/client";
import "../../scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../signup-signin/Signup";
import Index from "./Index";
import CareApp from "../CareApp/CareApp";
import NotFound from "./nav/NotFound";
import ArticlesSite from "../articles/ArticlesSite";
import Sitters from "../CareApp/Sitters";
import Pets from "../CareApp/Pets";
import Adoptions from "../adoptions/Adoptions";
import Dashboard from "../dashboard/Dashboard";
import ViewProfile from "../dashboard/profile/ViewProfile";
import Messages from "../dashboard/Messages";
import PickProfile from "../dashboard/profile/PickProfile";
import SetPetProfile from "../dashboard/profile/SetPetProfile";
import SetSitterProfile from "../dashboard/profile/SetSitterProfile";
import PetPf from "../CareApp/PetPf";
import SitPf from "../CareApp/SitPf";
import ProfilePhoto from "../dashboard/profile/ProfilePhoto";
import DeleteProfile from "../dashboard/profile/DeleteProfile";
import SingleMessage from "../dashboard/SingleMessage";
import Contact from "../contact/Contact";
import SearchResultPets from "../CareApp/searchEngine/SearchResultPets";
import SearchResultSitters from "../CareApp/searchEngine/SearchResultSitters";
import ThankYou from "./ThankYou";
import RegistrationForm from "../adoptions/RegistrationForm";
import Organisations from "../adoptions/Organisations";
import OrgPf from "../adoptions/OrgPf";

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/care" element={<CareApp />}>
              <Route path="sitterpf">
                <Route path=":id" element={<SitPf />} />
              </Route>
              <Route path="petpf">
                <Route path=":id" element={<PetPf />} />
              </Route>
              <Route path="orgpf">
                <Route path=":id" element={<OrgPf />} />
              </Route>
              <Route path="sitters" element={<Sitters />}>
                <Route path="searchsitters" element={<SearchResultSitters />} />
              </Route>
              <Route path="pets" element={<Pets />}>
                <Route path="searchpets" element={<SearchResultPets />} />
              </Route>
              <Route path="organisations" element={<Organisations />} />
              <Route path="adoptions" element={<Adoptions />} />
            </Route>
            <Route path="/articles" element={<ArticlesSite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="messages" element={<Messages />}>
                <Route path="msg">
                  <Route path=":id" element={<SingleMessage />} />
                </Route>
              </Route>
              <Route path="viewprofile" element={<ViewProfile />} />
              <Route path="pfp" element={<ProfilePhoto />} />
              <Route path="deletepf" element={<DeleteProfile />} />
            </Route>
            <Route path="/setprofile" element={<PickProfile />} />
            <Route path="/sitterpf" element={<SetSitterProfile />} />
            <Route path="/petpf" element={<SetPetProfile />} />
            <Route path="/organisationpf" element={<RegistrationForm />} />

            <Route
              path="documents"
              element={<h1 style={{ color: "black" }}>dokumenty</h1>}
            >
              <Route
                path="privacypolicy"
                element={
                  <h1 style={{ color: "black" }}>Polityka prywatności</h1>
                }
              />
              <Route
                path="regulations"
                element={<h1 style={{ color: "black" }}>Regulamin</h1>}
              />
            </Route>
            <Route path="thankyou" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
