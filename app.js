async function send() {
  const input = document.getElementById("input").value;

  const res = await fetch("https://impart-thing-cosmetics.ngrok-free.dev/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: input })
  });

  const data = await res.json();

  document.getElementById("output").innerText = data.response;
}
