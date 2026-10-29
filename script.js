const contacts = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com", phone: "555-0101" },
  { id: 2, name: "Grace Hopper", email: "grace@example.com", phone: "555-0102" },
  { id: 3, name: "Alan Turing", email: "alan@example.com", phone: "555-0103" }
];

let nextId = 4;

const list = document.getElementById("contact-list");
const form = document.getElementById("contact-form");

function render() {
  list.innerHTML = "";

  contacts.forEach((contact) => {
    const item = document.createElement("li");
    item.className = "contact";

    const info = document.createElement("div");
    const name = document.createElement("h2");
    name.textContent = contact.name;

    const details = document.createElement("p");
    details.textContent = contact.email + " · " + contact.phone;

    info.append(name, details);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "delete";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => {
      const index = contacts.findIndex((entry) => entry.id === contact.id);
      if (index !== -1) {
        contacts.splice(index, 1);
        render();
      }
    });

    item.append(info, remove);
    list.append(item);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  contacts.push({ id: nextId, name, email, phone });
  nextId += 1;
  form.reset();
  render();
});

render();
