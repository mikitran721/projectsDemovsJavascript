// fake api / mock api with json-server

let courseApi = "http://localhost:3000/courses";

/* fetch(courseApi)
  .then((res) => res.json())
  .then((courses) => {
    console.log("khoa hoc: ", courses);
  }); */

(function start() {
  getCourses(renderCourses);
  handleCreateForm();
})();

// function
function getCourses(callback) {
  fetch(courseApi)
    .then((res) => res.json())
    .then(callback)
    .catch((err) => console.log("co loi: ", err));
}

// tao moi data
function createCourse(data, callback) {
  let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  // console.log(options);
  // return;
  fetch(courseApi, options)
    .then((res) => res.json())
    .then(callback)
    .catch((err) => console.log("Loi khi tao course", err));
}

// xoa course
function handleDeleteCourse(id) {
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  // console.log(options);
  // return;
  fetch(courseApi + `/${id}`, options)
    .then((res) => res.json())
    .then(function () {
      let courseItem = document.querySelector(`.course-item-${id}`);
      if (courseItem) courseItem.remove();
    })
    .catch((err) => console.log("Loi khi xoa course", err));
}

// render html
function renderCourses(courses) {
  console.log(courses);
  let listCoursesBlock = document.querySelector("#list-courses");

  let htmls = courses.map(function (course) {
    return `
    <li class="course-item-${course.id}">
      <h4>${course.name}</h4>
      <p>${course.description}</p>
      <button onclick="handleDeleteCourse(${course.id})">&times;</button>
    </li>`;
  });
  console.log(htmls);
  listCoursesBlock.innerHTML = htmls.join("");
}

// function handle Form
function handleCreateForm() {
  let createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    let name = document.querySelector('input[name="name"]').value;
    let description = document.querySelector('input[name="description"]').value;
    // console.log(name);
    let formData = {
      name,
      description,
    };

    // console.log(formData);

    createCourse(formData, getCourses(renderCourses));
  };
}
