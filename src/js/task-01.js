const listCategoriesItems = document.querySelectorAll(".item");
console.log("Number of categories:", listCategoriesItems.length);

const listCategoriesItemsNames = listCategoriesItems.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.querySelectorAll("li").length);
});
