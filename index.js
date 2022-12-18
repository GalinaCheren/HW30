const categories = {
  highlighter: {
    name: "Highlighter",
    items: [
      { name: "Dior", title: "Dior", info: "BACKSTAGE Glow Face Palette" },
      {
        name: "tooFaced",
        title: "Too Faced",
        info: "Diamond Light Highlighter",
      },
      {
        name: "GUERLAIN",
        title: "GUERLAIN",
        info: "Météorites Illuminating Powder Pearls",
      },
    ],
  },
  lipstick: {
    name: "Lipstick",
    items: [
      {
        name: "Charlotte",
        title: "Charlotte Tilbury",
        info: "Matte Revolution Lipstick",
      },
      {
        name: "Fenty",
        title: "Fenty Beauty by Rihanna",
        info: "Stunna Lip Paint Longwear Fluid Lip Color",
      },
      { name: "tomFord", title: "TOM FORD", info: "Lip Color Lipstick" },
    ],
  },
  eyeshadow: {
    name: "Eyeshadow",
    items: [
      {
        name: "tomFord",
        title: "TOM FORD",
        info: "Eye Color Crème Eyeshadow Quad",
      },
      {
        name: "Dior",
        title: "Soft & Gentle",
        info: "BACKSTAGE Eyeshadow Palette",
      },
      {
        name: "Denona",
        title: "Natasha Denona",
        info: "Glam Eyeshadow Palette",
      },
    ],
  },
  mascara: {
    name: "Mascara",
    items: [
      {
        name: "Lancôme",
        title: "Lancôme ",
        info: "Lash Idôle Lash-Lifting & Volumizing Mascara",
      },
      {
        name: "ysl",
        title: "Yves Saint Laurent",
        info: "Lash Clash Extreme Volume Mascara",
      },
      {
        name: "tooFaced",
        title: "Too Faced",
        info: "Better Than Sex Volumizing & Lengthening Mascara",
      },
    ],
  },
  foundation: {
    name: "Foundation",
    items: [
      {
        name: "Fenty",
        title: "Fenty Beauty by Rihanna ",
        info: "Pro Filtr Soft Matte Longwear Liquid Foundation",
      },
      {
        name: "Charlotte",
        title: "Charlotte Tilbury ",
        info: "Airbrush Flawless Longwear Foundation",
      },
      {
        name: "Estée",
        title: "Estée Lauder",
        info: "Double Wear Stay-in-Place Foundation",
      },
    ],
  },
};

const itemsCategories = document.querySelector(".itemCategory");
const itemsCategoriesList = document.createElement("ul");
const itemInfo = document.querySelector(".itemInfo");
const itemsBlock = document.querySelector(".itemsList");

Object.keys(categories).forEach((category) => {
  const li = document.createElement("li");
  li.setAttribute("name", category);
  li.innerText = categories[category].name;
  li.onclick = onCategoryClick;

  itemsCategoriesList.append(li);
});
itemsCategories.append(itemsCategoriesList);

function onCategoryClick(event) {
  const items = categories[event.target.getAttribute("name")].items;
  const itemsList = document.createElement("ul");

  items.forEach((item) => {
    const li = document.createElement("li");
    li.setAttribute("name", item.name);
    li.setAttribute("category", event.target.getAttribute("name"));

    li.innerText = item.title;
    li.onclick = onItemClick;

    itemsList.append(li);
  });
  itemsBlock.innerHTML = "";
  itemInfo.innerHTML = "";
  itemsBlock.append(itemsList);
}

function onItemClick(event) {
  const category = event.target.getAttribute("category");
  const itemName = event.target.getAttribute("name");
  const item = categories[category].items.find(
    (item) => item.name === itemName
  );

  itemInfo.innerHTML = `<div><p>${item.info}</p>
  <button id = "buyButton">
  Buy</button></div>
  `;
  const buyButton = document.getElementById("buyButton");
  buyButton.onclick = () => {
    alert(`You bought ${item.title} item!`);
    itemsBlock.innerHTML = "";
    itemInfo.innerHTML = "";
  };
}
