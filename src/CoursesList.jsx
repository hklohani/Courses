import React from "react";
import { useRouteMatch, Link, Route } from "react-router-dom";
import CourseDetails from "./CourseDetails";

const CourseList = ({ match }) => {
  const courseData = [
    {
      id: 1,
      title: "CSS - The Complete Guide 2021 (incl. Flexbox, Grid & Sass)",
      author: "Robert Kiyosaki",
      video_length: "22.5 hours",
      number_of_lectures: 300,
      rating: "3.3 out of 5",
      students: "57,140",
    },
    {
      id: 2,
      title: "The Web Developer Bootcamp 2021",
      author: "Colt Steele",
      video_length: "60 hours",
      number_of_lectures: 490,
      rating: "4.3 out of 5",
      students: "689,613",
    },
    {
      id: 3,
      title: "Java Programming Masterclass for Software Developers",
      author: "Tim Buchalka",
      video_length: "40.5 hours",
      number_of_lectures: 490,
      rating: "4.6 out of 5",
      students: "588,150",
    },
    {
      id: 4,
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      author: "Maximilian Schwarzmülller",
      video_length: "80 hours",
      number_of_lectures: 400,
      rating: "4.3 out of 5",
      students: "412,587",
    },
    {
      id: 5,
      title: "Mastering Kotlin Coroutines for Android Development",
      author: "Vimosanan Ahiladas",
      video_length: "47.5 hours",
      number_of_lectures: 488,
      rating: "4.7 out of 5",
      students: "705",
    },
    {
      id: 6,
      title: "The Complete React Developer Course (with Hooks and Redux)",
      author: "Andrew Mead",
      video_length: "39 hours",
      number_of_lectures: 200,
      rating: "4.5 out of 5",
      students: "70,352",
    },
    {
      id: 7,
      title: "Zero to Hero Android Developer Course",
      author: "Burhanuddin Bariyawala",
      video_length: "24 hours",
      number_of_lectures: 350,
      rating: "4.4 out of 5",
      students: "31,331",
    },
    {
      id: 8,
      title: "Adobe Photoshop CC – Essentials Training Course",
      author: "Shirley Galicia",
      video_length: "11 hours",
      number_of_lectures: 65,
      rating: "4.9 out of 5",
      students: "77,909",
    },
    {
      id: 9,
      title: "The Complete Video Production Bootcamp",
      author: "Corwin Knowland",
      video_length: "9 hours",
      number_of_lectures: 50,
      rating: "4.4 out of 5",
      students: "77,909",
    },
    {
      id: 10,
      title: "Become a Game Designer the Complete Series Coding to Design",
      author: "Burhanuddin Bariyawala",
      video_length: "84 hours",
      number_of_lectures: 350,
      rating: "4.3 out of 5",
      students: "60,366",
    },
  ];

  const { url } = useRouteMatch();

  const listArray = courseData.map((course) => {
    return (
      <li className="mb-4 bg-light shadow" key={course.id}>
        <Link
          className="m-7 p-3 text-decoration-none list-group-item list-group-item-secondary list-group-item-action"
          to={`${url}${course.title}`}
        >
          {course.title}
        </Link>
      </li>
    );
  });

  return (
    <div className="container">
      <Route exact path={url}>
        <h2 className="mt-4 text-center">Courses List</h2>
        <hr />
          <ul className="list-group list-unstyled text-center ">{listArray}</ul>
      </Route>
      <Route path={`${url}:courseTitle`}>
        <CourseDetails data={courseData} />
      </Route>
    </div>
  );
};
export default CourseList;
