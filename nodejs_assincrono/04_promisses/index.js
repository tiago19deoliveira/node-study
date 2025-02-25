const loginUser = (email, password) => {
  //retorna uma promisse  = prometendo que em um tempo ela retorna o sucesso ou a falha da operação em questão
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        return reject("ih rapaz, deu erro");
      }

      console.log("usuário validado");
      resolve({ email, password });
    }, 300);
  });
};

const getUserVideo = (id, idDoCaba) => {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      console.log("retornado com o video do cabra");
      resolve(["vd1", "vd2", "vd3"]);
    }, 3000);
  });
};

const getUserVideoDetails = () => {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      resolve({ id: "1", name: "nodejs async ", duration: 1 });
    }, 3000);
  });
};

const user = loginUser("teste@", "password")
  .then((user) => {
    console.log("usuario retornado", user);

    return getUserVideo();
  })
  .then((userVideo) => {
    console.log(userVideo);
    return getUserVideoDetails();
  })
  .then((userVideoDetails) => {
    console.log(userVideoDetails, "video recuperado com detalhes");
  })
  .catch((errorMensage) => {
    console.log(errorMensage, "ih rapaz");
  });

// const userVideo = getUserVideo("12333", "idDoCabraVei")
//   .then((userVideo) => {
//     console.log("Usuário Retornad com vídeo", userVideo);
//   })
//   .catch((errorMensage) => {
//     console.log("raapaz, sei n ", errorMensage);
//   });
