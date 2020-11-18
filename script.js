window.onload = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const contentNode = document.getElementById("content");

    for (const post of data) {
      const divNode = document.createElement("div");
      const textNode = document.createTextNode(post.body);
      divNode.appendChild(textNode);
      contentNode.appendChild(divNode);
    }
  } catch (err) {
    console.warn('Something went wrong.', err);
  }
};
