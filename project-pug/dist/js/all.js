console.log("hello Pug");

function toogleSearch(e) {
  console.log("this: ", e);
  let $search__dropdown = document.querySelector(".search__dropdown");
  if ($search__dropdown.style.display === "none")
    $search__dropdown.style.display = "block";
  else $search__dropdown.style.display = "none";
}
