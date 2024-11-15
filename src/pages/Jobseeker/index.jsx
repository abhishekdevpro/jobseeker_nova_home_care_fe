import DashboardHeader from "@/components/header/DashboardHeader";
import CareServicesNav from "./CareServices";
import Sidebar from "./SideFilterBar";
import CaregiverList from "./CaregiversList";

import JobseekerHeader from "./JobseekerHeader";


const JobseekerList= ()=>{
    return (
        <>
          {/* <DashboardHeader /> */}
         <div className="min-h-screen bg-white">
          <JobseekerHeader />
          <CareServicesNav />
          {/* <SafetyBanner /> */}
          <div className="max-w-7xl mx-auto flex py-4">
            <aside className="hidden md:block ">
              <Sidebar />
            </aside>
            <CaregiverList />
          </div>
        </div>
        </>
      )
}

export default JobseekerList;