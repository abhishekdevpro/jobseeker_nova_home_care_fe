// import DashboardCandidatesHeader from "@/components/header/DashboardCandidatesHeader";
// import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
// import MyReviews from "./MyReviews";

// const MyReviewsPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div className="sticky top-0 z-50">
//         <span className="header-span"></span>
//         <DashboardCandidatesHeader />
//       </div>

//       {/* Main Content Section */}
//       <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
//         <div className="bg-white rounded-lg shadow-sm">
//           <MyReviews />
//         </div>
//       </main>

//       {/* Footer Section */}
//       <div className="mt-auto">
//         <CopyrightFooter />
//       </div>
//     </div>
//   );
// };

// export default MyReviewsPage;

import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";
import MemberShipPricing from "./MembershipPricing";

const MembershipPage = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardCandidatesHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard bg-teal-50 ">
        <div className="dashboard-outer">
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}
          <div>
            <MemberShipPricing />
          </div>

          {/* <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title flex">
                    <h4>My Profile</h4>
                    <div className="flex items-center space-x-2">
                      <label htmlFor="visibility" className="font-bold">
                        Profile and CV Visibility
                      </label>
                      <Switch
                        id="visibility"
                        className="rounded-xl data-[state=checked]:bg-[#E60278]"
                      />
                    </div>
                  </div>
                  <MyProfile />
                </div>
              </div>
              {/* <!-- Ls widget --> 

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Social Network</h4>
                  </div>
                  {/* End widget-title 

                  <div className="widget-content">
                    {/* <SocialNetworkBox /> 
                  </div>
                </div>
              </div>
              {/* profile visalibilty select option 
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Be found by empolyers</h4>
                  </div>
                  {/* End widget-title 
                  <div className="widget-content">
                    {/* <ProfileVisalbilty /> 
                  </div>
                </div>
              </div
              {/* <!-- Ls widget --> 

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Contact Information</h4>
                  </div>
                  {/* End widget-title 
                  <div className="widget-content">
                    <ContactInfoBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> 
            </div>
          </div> */}
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default MembershipPage;
