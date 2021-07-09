import React from "react";
import { useHistory, useParams } from "react-router-dom";

const GoBack = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <button  type="button"  className="btn btn-outline-secondary shadow mt-3" onClick={handleBackClick}>
      Go Back
    </button>
  );
};

const CourseDetails = ({ data }) => {
  const { courseTitle } = useParams();
  console.log(courseTitle);

  const course = data.find((course) => course.title === courseTitle);

  let courseData;

  course
    ? (courseData = (
        <div>
          <h3 className="text-center">{course.title}</h3>
          <hr />
          <div
            className="container card text-white bg-info p-2 mb-3 shadow rounded"
            style={{ width: "18rem" }}
          >
            <h6 className="card-header text-center">
              Created by {course.author}
            </h6>
            <div className="card-body">
              <p className="shadow-sm p-1">Length: {course.video_length}</p>
              <p className="shadow-sm p-1">Number of lecture: {course.number_of_lectures}</p>
              <p className="shadow-sm p-1" >Rating: {course.rating}</p>
              <p className="shadow-sm p-1">Students Enrolled: {course.students}</p>
            </div>
          </div>
        </div>
      ))
    : (courseData = <h2> Sorry. course doesn't exist </h2>);

  return (
    <div className="container mt-5">
      {courseData}
      <div className="text-center">
        <GoBack />
      </div>
    </div>
  );
};

export default CourseDetails;
