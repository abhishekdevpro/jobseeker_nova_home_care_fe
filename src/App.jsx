import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { useEffect } from "react";
import ScrollToTop from "./components/common/ScrollTop";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobListPage1 from "./pages/job-list/job-list-v1";
import JobListPage2 from "./pages/job-list/job-list-v2";
import JobListPage3 from "./pages/job-list/job-list-v3";
import JobListPage4 from "./pages/job-list/job-list-v4";
import JobListPage5 from "./pages/job-list/job-list-v5";
import JobListPage6 from "./pages/job-list/job-list-v6";
import JobListPage7 from "./pages/job-list/job-list-v7";
import JobListPage8 from "./pages/job-list/job-list-v8";
import JobListPage9 from "./pages/job-list/job-list-v9";
import JobListPage10 from "./pages/job-list/job-list-v10";
import JobListPage11 from "./pages/job-list/job-list-v11";
import JobListPage12 from "./pages/job-list/job-list-v12";
import JobListPage13 from "./pages/job-list/job-list-v13";
import JobListPage14 from "./pages/job-list/job-list-v14";
import JobSingleDynamicV1 from "./pages/job-single/job-single-v1";
import JobSingleDynamicV2 from "./pages/job-single/job-single-v2";
import JobSingleDynamicV3 from "./pages/job-single/job-single-v3";
import JobSingleDynamicV4 from "./pages/job-single/job-single-v4";
import JobSingleDynamicV5 from "./pages/job-single/job-single-v5";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import CandidateListPage2 from "./pages/candidates-list/candidates-list-v2";
import CandidateListPage3 from "./pages/candidates-list/candidates-list-v3";
import CandidateListPage4 from "./pages/candidates-list/candidates-list-v4";
import CandidateListPage5 from "./pages/candidates-list/candidates-list-v5";
import CandidateSingleDynamicV1 from "./pages/candidates-single/candidates-single-v1";
import CandidateSingleDynamicV2 from "./pages/candidates-single/candidates-single-v2";
import CandidateSingleDynamicV3 from "./pages/candidates-single/candidates-single-v3";
import BlogListpage1 from "./pages/blog/blog-list-v1";
import BlogListpage2 from "./pages/blog/blog-list-v2";
import BlogListpage3 from "./pages/blog/blog-list-v3";
import BlogDetailsDynamic from "./pages/blog/blog-details";
import AboutPage from "./pages/others/about";
import PricingPage from "./pages/others/pricing";
import FaqPage from "./pages/others/faq";
import TermsPage from "./pages/others/terms";
import InvoicePage from "./pages/others/invoice";
import ContactPage from "./pages/others/contact";
import NotFoundPage from "./pages/others/404";
import DashboardPage from "./pages/candidates-dashboard/dashboard";
import AppliedJobsPage from "./pages/candidates-dashboard/applied-jobs";
import ChangePasswordPage from "./pages/candidates-dashboard/change-password";
import CVMannagerPage from "./pages/candidates-dashboard/cv-manager";
import JobAlertPage from "./pages/candidates-dashboard/job-alerts";
import MessageesPage from "./pages/candidates-dashboard/messages";
import MyProfilePage from "./pages/candidates-dashboard/my-profile";
import MyResumePage from "./pages/candidates-dashboard/my-resume";
import PackagePage from "./pages/candidates-dashboard/packages";
import ShortListedJobsPage from "./pages/candidates-dashboard/short-listed-jobs";
import LoginPage from "./pages/others/login";
import RegisterPage from "./pages/others/register";
import ShopListPage from "./pages/shop/shop-list";
import ShopSingleDyanmic from "./pages/shop/shop-single";
import CartPage from "./pages/shop/cart";
import CheckoutPage from "./pages/shop/checkout";
import OrderCompletedPage from "./pages/shop/order-completed";

// new routes
import { Toaster } from "react-hot-toast";
import SignUpDialog from "./components/auth/SignUp";
import Showcase from "./pages/showcase/Index";
import Novahome from './pages/Novahome.jsx'
import ForgotPassword from "./pages/others/ForgotPassword";
import JobseekerList from "./pages/Jobseeker";
import JobseekerProfile from "@/pages/JobseekerProfile/index.jsx"
import CandidateListPage1 from "./pages/candidates-list/candidates-list-v1";
import EditProfile from "./components/dashboard-pages/candidates-dashboard/my-profile/components/my-profile/EditProfile";
import MyReviewsPage from "./components/dashboard-pages/candidates-dashboard/my-reviews";
import EmailVerificationPage from "./components/dashboard-pages/candidates-dashboard/Email-verification";
import DocumentPage from "./components/dashboard-pages/candidates-dashboard/Document-page";
import MembershipPage from "./components/dashboard-pages/candidates-dashboard/Membership";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <div className="page-wrapper">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                {/* <Route index element={<Home />} /> */}
                <Route index element={<Novahome />} />
                <Route path="showcase/:org" element={<Showcase />} />
                <Route path="job-list-v1" element={<JobListPage1 />} />
                <Route path="job-list-v2" element={<JobListPage2 />} />
                {/*<Route path="job-list-v3" element={<JobListPage3 />} />
                  <Route path="job-list-v4" element={<JobListPage4 />} />
                  <Route path="job-list-v5" element={<JobListPage5 />} />
                  <Route path="job-list-v6" element={<JobListPage6 />} />*/}
                <Route path="job-list-v7" element={<JobListPage7 />} />
                {/* <Route path="job-list-v8" element={<JobListPage8 />} />
                <Route path="job-list-v9" element={<JobListPage9 />} />
                <Route path="job-list-v10" element={<JobListPage10 />} />
                <Route path="job-list-v11" element={<JobListPage11 />} />
                <Route path="job-list-v12" element={<JobListPage12 />} />
                <Route path="job-list-v13" element={<JobListPage13 />} />
                <Route path="job-list-v14" element={<JobListPage14 />} /> */}
                <Route
                  path="job-single-v1/:id"
                  element={<JobSingleDynamicV1 />}
                />
                <Route
                  path="job-single-v2/:id"
                  element={<JobSingleDynamicV2 />}
                />
                <Route
                  path="job-single-v3/:id"
                  element={<JobSingleDynamicV3 />}
                />
                <Route
                  path="job-single-v4/:id"
                  element={<JobSingleDynamicV4 />}
                />
                <Route
                  path="job-single-v5/:id"
                  element={<JobSingleDynamicV5 />}
                />

                
                <Route
                  path="candidates-list-v1"
                  element={<CandidateListPage1 />}
                />
                <Route
                  path="candidates-list-v2"
                  element={<CandidateListPage2 />}
                />
                <Route
                  path="candidates-list-v3"
                  element={<CandidateListPage3 />}
                />
                <Route
                  path="candidates-list-v4"
                  element={<CandidateListPage4 />}
                />
                <Route
                  path="candidates-list-v5"
                  element={<CandidateListPage5 />}
                />

                <Route
                  path="candidates-single-v1/:id"
                  element={<CandidateSingleDynamicV1 />}
                />
                {/* <Route path="candidates-single-v2/:id" element={<CandidateSingleDynamicV2 />} />
                  <Route path="candidates-single-v3/:id" element={<CandidateSingleDynamicV3 />} /> */}

                <Route path="blog-list-v1" element={<BlogListpage1 />} />
                {/* <Route path="blog-list-v2" element={<BlogListpage2 />} />
                  <Route path="blog-list-v3" element={<BlogListpage3 />} /> */}
                <Route
                  path="blog-details/:id"
                  element={<BlogDetailsDynamic />}
                />

                {/* <Route path="about" element={<AboutPage />} /> */}

                <Route path="pricing" element={<PricingPage />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="terms" element={<TermsPage />} />
                <Route path="invoice" element={<InvoicePage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />

              

                <Route path="jobseeker-dashboard">
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="applied-jobs" element={<AppliedJobsPage />} />
                  <Route
                    path="change-password"
                    element={<ChangePasswordPage />}
                  />
                  <Route path="cv-manager" element={<CVMannagerPage />} />
                  <Route path="job-alerts" element={<JobAlertPage />} />
                  <Route path="messages" element={<MessageesPage />} />
                  <Route path="my-profile" element={<MyProfilePage />} />
                  <Route path="my-resume" element={<MyResumePage />} />
                  <Route path="my-reviews" element={<MyReviewsPage />} />
                  <Route path="verification" element={<EmailVerificationPage />} />
                  <Route path="document" element={<DocumentPage />} />
                  <Route path="membership" element={<MembershipPage />} />
                  <Route path="packages" element={<PackagePage />} />
                  <Route
                    path="short-listed-jobs"
                    element={<ShortListedJobsPage />}
                  />
                </Route>

                <Route path="shop">
                  <Route path="shop-list" element={<ShopListPage />} />
                  <Route
                    path="shop-single/:id"
                    element={<ShopSingleDyanmic />}
                  />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="checkout" element={<CheckoutPage />} />
                  <Route
                    path="order-completed"
                    element={<OrderCompletedPage />}
                  />
                </Route>
                <Route path="/jobseeker-dashboard/edit-profile" element={<EditProfile />} />

                {/* Jobseeker Routes */}
                <Route path="/jobseeker-list/search" element={<JobseekerList />} />
                <Route path="/jobseeker-profile/:id" element={<JobseekerProfile />} />

              </Route>
            </Routes>
            <ScrollTopBehaviour />
          </BrowserRouter>

          {/* Toastify */}
          {/* <ToastContainer
            position="bottom-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          /> */}
          <SignUpDialog />
          <Toaster />
          {/* <!-- Scroll To Top --> */}
          <ScrollToTop />
        </div>
      </Provider>
    </>
  );
}

export default App;
