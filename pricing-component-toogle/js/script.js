function toggleIt() {
  var x = document.getElementById("change");
  var y = document.getElementById("change2");
  var z = document.getElementById("change3");

  if (
    (x.innerHTML === "199.99") &
    (y.innerHTML === "249.99") &
    (z.innerHTML === "399.99")
  ) {
    x.innerHTML = "19.99";
    y.innerHTML = "24.99";
    z.innerHTML = "39.99";
  } else {
    x.innerHTML = "199.99";
    y.innerHTML = "249.99";
    z.innerHTML = "399.99";
  }
}
