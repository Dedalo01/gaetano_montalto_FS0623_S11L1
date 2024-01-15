import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  //const [jobs, setJobs] = useState([]);
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();

        //setJobs(data);
        dispatch({
          type: "ADD_JOBS_ARRAY",
          payload: data,
        });
        console.log("JOBS STATE ", jobs);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>

        {jobs.length === 0 ? (
          <Col sm={12} className="mt-5 text-center">
            <p>Search a Job to display all relative jobs avaiable</p>
          </Col>
        ) : (
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((jobData) => {
              //console.log("jobs ", jobs);
              //console.log("jobData ", jobData);
              return <Job key={jobData._id} data={jobData} />;
            })}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
