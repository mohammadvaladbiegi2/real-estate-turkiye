import React from "react";
import About from "./page/About/About";
import BusinessRelocation from "./page/BusinessRelocation/BusinessRelocation";
import GeneralDisclaimer from "./page/GeneralDisclaimer/GeneralDisclaimer";
import Homepage from "./page/Homepage/Homepage";
const LazyHomepage = React.lazy(() => import("./page/Homepage/Homepage"));
import InvestmentOpportunities from "./page/InvestmentOpportunities/InvestmentOpportunities";
import Services from "./page/Services/Services";
import Migration from "./page/Migration/Migration";
import ContactUs from "./componant/ContactUs/ContactUs";
import FamilyRelocations from "./page/FamilyRelocations/FamilyRelocations";
import Loader from "./componant/Loader/Loader";

const routs = [
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loader />}>
        <LazyHomepage />
      </React.Suspense>
    ),
  },
  { path: "/about", element: <About /> },
  { path: "/businessRelocation", element: <BusinessRelocation /> },
  { path: "/generalDisclaimer", element: <GeneralDisclaimer /> },
  { path: "/investmentOpportunities", element: <InvestmentOpportunities /> },
  { path: "/migration", element: <Migration /> },
  { path: "/services", element: <Services /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/familyrelocations", element: <FamilyRelocations /> },
];

export default routs;
