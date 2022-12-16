import GTA from "../../Assets/Images/gta.png";
import GOD from "../../Assets/Images/god.png";
import MOBILE from "../../Assets/Images/mobile.png";

const GtaProject = (
  <div className="ProjectsDiv">
    <div className="ProjectDetails">
      <span className="ProjectsText">UX/UI GAME</span>
      <span className="ProjectTitle">GTA VI</span>
      <span className="ProjectsText">6.9.22</span>
    </div>
    <img src={GTA} className="ProjectImage" alt="Gta VI UI" />
  </div>
);
const GodProject = (
  <div className="ProjectsDiv">
    <div className="ProjectDetails">
      <span className="ProjectsText">3D CHARACHTER DESIGN</span>
      <span className="ProjectTitle">VALANUOR</span>
      <span className="ProjectsText">6.9.22</span>
    </div>
    <img src={GOD} className="ProjectImage" alt="Gta VI UI" />
  </div>
);
const MobileProject = (
  <div className="ProjectsDiv">
    <div className="ProjectDetails">
      <span className="ProjectsText">UX/UI GAME</span>
      <span className="ProjectTitle">BUMPUP</span>
      <span className="ProjectsText">6.9.22</span>
    </div>
    <img src={MOBILE} className="ProjectImage" alt="Gta VI UI" />
  </div>
);
export default [GtaProject, GodProject, MobileProject]
