const input = document.querySelector("input").value;
const button = document.querySelector("button");

button.addEventListener("click", getRapper);

async function getRapper() {
  try {
    const request = await fetch(`http://localhost:8000/api/${input}`);
    const data = await request.json();
    console.log(data);
    document.querySelector("#age").innerText = data.age;
    document.querySelector("#birthname").innerText = data.birthname;
    document.querySelector("#birthlocation").innerText = data.birthlocation;
  } catch (error) {
    console.log(error);
  }
}