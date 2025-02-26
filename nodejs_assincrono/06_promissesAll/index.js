const loadsProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "name produto", price: 900 }]);
      console.log("connect and load product");
    }, 3000);
  });
};
const loadsCategory = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "nontebooks" }]);
      console.log("connect category");
    }, 3000);
  });
};

const loadsUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Tiago", idade: 22 }]);
      console.log("connect loadUsers");
    }, 3000);
  });
};

const init = async () => {
  //   const product = await loadsProducts();
  //   const category = await loadsCategory();
  //   const users = await loadsUsers();

  //   console.log(product, category, users);
  try {
    const results = await Promise.allSettled([
      loadsCategory(),
      loadsProducts(),
      loadsUsers(),
    ]);
    console.log(results, "resultado results ");
    console.log(product, category, users);
  } catch (error) {
    console.log(error, "super error no envio");
  }
};
init();
