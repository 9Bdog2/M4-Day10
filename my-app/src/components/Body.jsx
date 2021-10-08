import { Row } from "react-bootstrap";
import MyRow from "./MyRow";
import MyCard from "./MyCard";

const Body = () => {
  return (
    <Row style={{ marginLeft: "250px" }}>
      {/* GOOD MORNING SECTION */}
      <div className="col-12 mt-3 ">
        <div>
          <h3>Good Morning</h3>
        </div>

        <MyRow query={"queen"} />
      </div>
      {/* END OF GOOD MORNING SECTION */}
      {/* RECENTLY PLAYED SECTION */}
      <div className="col-12">
        {/* Recently played*/}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h3>Recently played</h3>
          <h6>SEE ALL</h6>
        </div>
        <div className="w-100 recently-played-container">
          {/* One card*/}
          <MyCard query={"metallica"} />
        </div>
        {/* One card end*/}
      </div>
      {/* SHOWS TO TRY SECTION*/}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <h3 className="my-0">Shows to try</h3>
          <p className="my-0">Podcasts we think you'll get hooked on.</p>
        </div>
        <h6>SEE ALL</h6>
      </div>
      <div className="w-100 mt-3 shows-to-try-container">
        {/* One card*/}
        <MyCard query={"Elton%20John"} />
        {/* One card end*/}
      </div>
      {/* SHOWS TO TRY SECTION END*/}

      {/* MAIN SECTION END */}
    </Row>
  );
};

export default Body;
