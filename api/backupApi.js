// json
/* 
    json: la 1 dinh dang du lieu - don gian la 1 chuoi
    -- tu js sang Json: (ma hoa encode) Stringify()
    -- tu son sang JS:  (giai ma decode) Parse()
    -- the hien dang:
        number, boolean, array, object, string, null
*/

// ung dung FETCH lay du lieu api
var postApi = "https://jsonplaceholder.typicode.com/posts?_limit=10";

// fetch() la 1 promise; tra ve 1 stream;
fetch(postApi)
  .then((response) => {
    return response.json();
    // se tra ra 1 promise
  })
  .then((posts) => {
    // post-block
    let htmls = posts
      .map((post) => {
        return `
            <li>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </li>
        `;
      })
      .join("");
    document.getElementById("post-block").innerHTML = htmls;

    // console.log(json);
  })
  .catch((err) => console.log(err));
