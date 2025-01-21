import React, { useEffect } from "react";
import axios from "axios";
import "./aboutus.css";
import Introductions from "./Introductions";
import ForJobseeker from "./ForJobseeker";
import ForEmployer from "./ForEmployer";
import Novajobsus from "./Novajobsus";
import MoreServices from "./MoreServices";
import DashboardCandidatesHeader from "../header/DashboardCandidatesHeader";

function Aboutus() {
  const [sections, setSections] = React.useState([]);

  // Fetch data from the GET API
  const fetchContent = async () => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/admin/homecare/get-aboutus-content`
      );
      const data = response.data;
      setSections(data.data || []);
      // Fallback content if fields are empty or null
    } catch (error) {
      console.error("Error fetching content:", error);
      // alert("An error occurred while fetching content.");
    }
  };
  useEffect(() => {
    fetchContent();
  }, []);

  const getSectionData = (id) => {
    console.log("sections", sections);
    return sections.find((section) => section.id === id);
  };
  return (
    <>
      <div className="page-wrapper ">
        <span className="header-span"></span>

        <DashboardCandidatesHeader />
        <section className="user-dashboard bg-teal-50 ">
          <div className="dashboard-outer">
            <div className="page-content bg-white">
              <div className="content-block ">
                <div className="section-full bg-white p-t50 p-b20">
                  <div className="container">
                    <div className="m-b30">
                      <div className="job-bx">
                        {sections.length ? (
                          <>
                            <Introductions
                              introductionData={getSectionData(1)}
                            />
                            <ForJobseeker
                              forJobseekerData={getSectionData(2)}
                            />
                            <ForEmployer forEmployerData={getSectionData(3)} />
                            <Novajobsus novaJobsusData={getSectionData(4)} />
                            <MoreServices
                              moreServicesData={getSectionData(5)}
                            />
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutus;
