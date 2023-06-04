const button = document.querySelector("button");

button.addEventListener("click", getRapper);

async function getRapper() {
  const input = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://full-stack-practice-fnfr.onrender.com/api/${input}`
    );
    const data = await response.json();
    console.log(data);
    document.querySelector("#age").innerText = data.age;
    document.querySelector("#birthname").innerText = data.birthname;
    document.querySelector("#birthlocation").innerText = data.birthlocation;
  } catch (error) {
    console.log(error);
  }
}
