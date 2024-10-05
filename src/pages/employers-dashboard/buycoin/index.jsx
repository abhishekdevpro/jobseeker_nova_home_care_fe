
// import Buycoin from "@/components/dashboard-pages/employers-dashboard/Buycoin";
import Buycoin from '../../components/dashboard-pages/employers-dashboard/Buycoin';

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Packages || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const BuycoinDBPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Buycoin />
    </>
  );
};

export default BuycoinDBPage
