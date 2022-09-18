const categoriesList = document.querySelector("#categories");

const categories = document.querySelectorAll(".item");

const showCategory = (categories) =>
  categories.forEach((category) => {
    const categoryName = category.firstElementChild.textContent;

    const showCategoryName = console.log(`Category: ${categoryName}`);

    const elementCount = category.querySelectorAll("li");

    const showelementCount = console.log(`Elements: ${elementCount.length}`);

    return showCategoryName, showelementCount;
  });

console.log(`Number of categories: ${categoriesList.children.length}`);
showCategory(categories);
