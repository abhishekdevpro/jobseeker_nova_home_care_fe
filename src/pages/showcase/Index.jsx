import React from "react";

import Wrapper from "@/layout/Wrapper";
import ShowcaseComponent from "@/components/showcase/Showcase";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import DefaulHeader2 from "@/components/header/DefaulHeader2";
import MobileMenu from "@/components/header/MobileMenu";
import FooterDefault from "@/components/footer/common-footer";

const Showcase = () => {
  return (
    <Wrapper>
      {/* <LoginPopup /> */}
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      <ShowcaseComponent />

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </Wrapper>
  );
};

export default Showcase;