import DashboardCandidatesHeader from "@/components/header/DashboardCandidatesHeader";
import EditProfileForm from "./EditProfile";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";

const EditProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="sticky top-0 z-50">
        <span className="header-span"></span>
        <DashboardCandidatesHeader />
      </div>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm">
          <EditProfileForm />
        </div>
      </main>

      {/* Footer Section */}
      <div className="mt-auto">
        <CopyrightFooter />
      </div>
    </div>
  );
};

export default EditProfilePage;