const button = document.querySelector("button");

button.addEventListener("click", getRapper);

async function getRapper() {
  const input = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://full-stack-practice-l2c4.onrender.com/api/${input}`
    );
    const data = await response.json();
    console.log(data);
    document.querySelector("#age").textContent = `Age: ${data.age}`;
    document.querySelector(
      "#birthname"
    ).textContent = `Birth Name: ${data.birthname}`;
    document.querySelector(
      "#birthlocation"
    ).textContent = `Birth Location: ${data.birthlocation}`;
  } catch (error) {
    console.log(error);
  }
}
