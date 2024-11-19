import DashboardCandidatesHeader from "@/components/header/DashboardCandidatesHeader";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import DocumentUploadForm from "./DoucumentUploadForm";
import MobileMenu from "@/components/header/MobileMenu";
import { Link } from "react-router-dom";

const DocumentUploadPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="sticky top-0 z-50">
        <span className="header-span"></span>
        <DashboardCandidatesHeader />
        <MobileMenu />
      </div>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className=" rounded-lg shadow-sm">
           <Link to={'/jobseeker-dashboard/dashboard'}>
           <button className="bg-teal-500 text-white py-2 rounded-lg px-4">
                back
            </button>
           </Link>
          <DocumentUploadForm />
        </div>
      </main>
      {/* Footer Section */}
      <div className="mt-auto">
        <CopyrightFooter />
      </div>
    </div>
  );
};

export default DocumentUploadPage;