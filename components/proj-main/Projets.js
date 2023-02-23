import Projet1 from "./projet1";
import Projet2 from "./projet2";
export default function Projets() {
  return (
    <div>
      <div className="container-fluid  ">
        <div className="row justify-content-start ">
          <div className=" col-sm-12 col-md-10">
            <Projet1 />
          </div>
          <div className=" col-md-2"></div>

      </div>
     < div className="container-fluid  ">
        <div className="row justify-content-end">  
          <div className=" col-md-2"></div>
          
      <div className=" col-sm-12 col-md-10">
            <Projet1 />
          </div>
          </div>
      </div>
      </div>
      </div>
  );
}
