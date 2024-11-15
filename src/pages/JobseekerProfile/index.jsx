import JobseekerHeader from "../Jobseeker/JobseekerHeader";
import JobseekerProfilePage from "./MyProfile";


const JobseekerList= ()=>{
    return (
        <>
          {/* <DashboardHeader /> */}
         <div className="min-h-screen bg-white">
          <JobseekerHeader />
          {/* <SafetyBanner /> */}
          <div className="max-w-7xl mx-auto flex py-4">
           <JobseekerProfilePage />
          </div>
        </div>
        </>
      )
}

export default JobseekerList;