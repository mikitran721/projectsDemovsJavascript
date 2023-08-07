// fake api / mock api with json-server

var courseApi = "http://localhost:3000/courses";

fetch(courseApi)
  .then((res) => res.json())
  .then((courses) => {
    console.log("khoa hoc: ", courses);
  });
