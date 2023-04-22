let contactList = [
  {
    name: "Filip Mamcarczyk",
    phoneNumber: "123 456 789",
  },
  {
    name: "Kacper Sokołowski",
    phoneNumber: "234 567 890",
  },
];

const renderContacts = () => {
  const contactsContainer = document.querySelector("#contacts");
  contactsContainer.innerHTML = "";

  contactList.forEach((contact) => {
    const newContact = `
        <div class="contact">
          <div class="contact-info">
              <p>${contact.name}</p>
              <span>${contact.phoneNumber}</span>
          </div>
          <div class="contact-remove">
              <img src="images/trash.png" />
          </div> 
        </div>
    `;

    contactsContainer.innerHTML += newContact;
  });

  //  document.querySelectorAll(".contact-remove img").forEach((element) => {
  //  element.addEventListener("click", () => {
  //  const trashes = [...document.querySelectorAll(".contact-remove img")];
  //const elementIndex = trashes.indexOf(element);

  //contactList = contactList.filter((el, index) => {
  //return index !== elementIndex;
  //});
  //renderContacts();
  //});
  //});
};
document.querySelector("#add-contact").addEventListener("click", () => {
  const nameField = document.querySelector("#name");
  const phoneNumberField = document.querySelector("#phone-number");

  const newContact = {
    name: nameField.value,
    phoneNumber: phoneNumberField.value,
  };

  contactList.push(newContact);

  renderContacts();

  nameField.value = "";
  phoneNumberField.value = "";
});

renderContacts();
