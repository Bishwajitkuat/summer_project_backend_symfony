import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import EventList from "./pages/EventList";
import EventInfo from "./pages/EventInfo";
import OrgList from "./pages/OrgList";
import OrgDetail from "./pages/OrgDetail";
import AboutSeminar from "./pages/AboutSeminar";
import SpeakersList from "./pages/SpeakersList";
import SpeakerInfo from "./pages/SpeakerInfo";
import AttendeesList from "./pages/AttendeesList";
import AttendeesDetail from "./pages/AttendeesDetail";
import WhatToDoHelsinki from "./pages/WhatToDoHelsinki";
import AddSpeaker from "./admin/AddSpeaker";
import AddAttendee from "./admin/AddAttendee";
import AddSeminar from "./admin/AddSeminar";
import AddEvent from "./admin/AddEvent";
import AddOrg from "./admin/AddOrg";
import EditDeleteSpeaker from "./admin/EditDeleteSpeaker";
import EditDeleteSeminar from "./admin/EditDeleteSeminar";
import EditDeleteEvent from "./admin/EditDeleteEvent";
import EditDeleteOrg from "./admin/EditDeleteOrg";
import Admin from "./admin/Admin";
import SpeakersAdminBoard from "./admin/SpeakersAdminBoard";
import EditSpeaker from "./admin/EditSpeaker";
import OrganizationsAdminBoard from "./admin/OrganizationsAdminBoard";
import EditOrg from "./admin/EditOrg";
import EventsAdminBoard from "./admin/EventsAdminBoard";
import EditEvents from "./admin/EditEvents";

const Main = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutSeminar" element={<AboutSeminar />} />
                <Route path="/whatToDoHelsinki" element={<WhatToDoHelsinki />} />
                <Route path="/eventList" element={<EventList />} />
                <Route path="eventList/:id" element={<EventInfo />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="/aboutSeminar/orgList" element={<OrgList />} />
                <Route path="/aboutSeminar/orgList/:id" element={<OrgDetail />} />
                <Route path="/speakersList" element={<SpeakersList />} />
                <Route path="/speakersList/:speakerInfo" element={<SpeakerInfo />} />
                <Route path="/attendeesList" element={<AttendeesList />} />
                <Route
                    path="/attendeesList/:attendeesdetail"
                    element={<AttendeesDetail />}
                />
                <Route path="/admin/addSeminar" element={<AddSeminar />} />
                <Route path="/admin/addEvent" element={<AddEvent />} />
                <Route path="/admin/addSpeaker" element={<AddSpeaker />} />
                <Route path="/admin/addOrganization" element={<AddOrg />} />
                <Route path="/admin/addAttendee" element={<AddAttendee />} />
                <Route
                    path="/admin/EditDeleteSeminar"
                    element={<EditDeleteSeminar />}
                />
                {/* <Route path="/admin/EditDeleteEvent" element={<EditDeleteEvent />} /> */}
                {/* <Route
          path="/admin/EditDeleteSpeaker"
          element={<EditDeleteSpeaker />}
        /> */}
                {/* <Route
          path="/admin/EditDeleteOrganization"
          element={<EditDeleteOrg />}
        /> */}
                <Route path="/admin/portal" element={<Admin />}></Route>
                <Route
                    path="/admin/speakers_admin_board"
                    element={<SpeakersAdminBoard />}
                />
                <Route path="/admin/editSpeaker/:id" element={<EditSpeaker />} />
                <Route
                    path="/admin/organizations_admin_board"
                    element={<OrganizationsAdminBoard />}
                />
                <Route path="/admin/editOrg/:id" element={<EditOrg />} />
                <Route
                    path="/admin/events_admin_board"
                    element={<EventsAdminBoard />}
                />
                <Route path="/admin/editEvent/:id" element={<EditEvents />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Main;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);