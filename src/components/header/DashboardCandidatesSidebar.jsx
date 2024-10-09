

// import { Link } from "react-router-dom";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import candidatesuData from "../../data/candidatesMenuData";
// import { isActiveLink } from "../../utils/linkActiveChecker";

// import { useDispatch, useSelector } from "react-redux";
// import { menuToggle } from "../../features/toggle/toggleSlice";

// import { useLocation } from "react-router-dom";
// const DashboardCandidatesSidebar = () => {
//   const { pathname } = useLocation();
//   const { menu } = useSelector((state) => state.toggle);
//   const percentage = 30;


//   const dispatch = useDispatch();
//   // menu togggle handler
//   const menuToggleHandler = () => {
//     dispatch(menuToggle());
//   };

//   return (
//     <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
//       {/* Start sidebar close icon */}
//       <div className="pro-header text-end pb-0 mb-0 show-1023">
//         <div className="fix-icon" onClick={menuToggleHandler}>
//           <span className="flaticon-close"></span>
//         </div>
//       </div>
//       {/* End sidebar close icon */}

//       <div className="sidebar-inner">
//         <ul className="navigation">
//           {candidatesuData.map((item) => (
//             <li
//               className={`${
//                 isActiveLink(item.routePath, pathname) ? "active" : ""
//               } mb-1`}
//               key={item.id}
//               onClick={menuToggleHandler}
//             >
//               <Link to={item.routePath}>
//                 <i className={`la ${item.icon}`}></i> {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         {/* End navigation */}

//         <div className="skills-percentage">
//           <h4>Skills Percentage</h4>
//           <p>
//             `Put value for <strong>Cover Image</strong> field to increase your
//             skill up to <strong>85%</strong>`
//           </p>
//           <div style={{ width: 200, height: 200, margin: "auto" }}>
//             <CircularProgressbar
//               background
//               backgroundPadding={6}
//               styles={buildStyles({
//                 backgroundColor: "#7367F0",
//                 textColor: "#fff",
//                 pathColor: "#fff",
//                 trailColor: "transparent",
//               })}
//               value={percentage}
//               text={`${percentage}%`}
//             />
//           </div>{" "}
//           {/* <!-- Pie Graph --> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardCandidatesSidebar;
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import candidatesuData from "../../data/candidatesMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { useLocation } from "react-router-dom";

const DashboardCandidatesSidebar = () => {
  const { pathname } = useLocation();
  const { menu } = useSelector((state) => state.toggle);
  const percentage = 30;

  const dispatch = useDispatch();
  // menu toggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""} bg-white shadow-lg`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div
          className="fix-icon text-gray-500 hover:text-teal-500 cursor-pointer"
          onClick={menuToggleHandler}
        >
          <span className="flaticon-close"></span>
        </div>
      </div>
      {/* End sidebar close icon */}

      <div className="sidebar-inner p-4">
        <ul className="navigation space-y-2">
          {candidatesuData.map((item) => (
            <li
              className={`${
                isActiveLink(item.routePath, pathname)
                  ? "bg-teal-500 text-white"
                  : "text-gray-700 hover:bg-teal-100"
              } rounded-md mb-1`}
              key={item.id}
              onClick={menuToggleHandler}
            >
              <Link
                to={item.routePath}
                className="flex items-center px-4 py-2"
              >
                <i className={`la ${item.icon} mr-2`}></i> {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* End navigation */}

        <div className="skills-percentage mt-6 text-center">
          <h4 className="text-teal-600 font-semibold">Skills Percentage</h4>
          <p className="text-gray-500 text-sm">
            `Put value for <strong>Cover Image</strong> field to increase your
            skill up to <strong>85%</strong>`
          </p>
          <div className="w-48 h-48 mx-auto mt-4">
            <CircularProgressbar
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#E6FFFA",
                textColor: "#319795",
                pathColor: "#319795",
                trailColor: "transparent",
              })}
              value={percentage}
              text={`${percentage}%`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCandidatesSidebar;
