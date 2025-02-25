const logUser = (email, password, onSuccessBd, onErrorBd) => {
  setTimeout(() => {
    const error = false;
    if (error) {
      return onErrorBd("Erro na conexeção com banco");
    }
    console.log("verified in bd");
    onSuccessBd({ email });
  }, 3000);
};

const getVideo = (onSuccessVideoDb) => {
  setTimeout(() => {
    onSuccessVideoDb(["vd1", "vd2", "vd3"]);
    console.log("chamando vídeo do back end");
  }, 3000);
};

const getVideoUserId = (onSuccessVdId, onErrorVdId) => {
  setTimeout(() => {
    onSuccessVdId("pegou o diacho do vd");
  }, 3000);
};

const user = logUser(
  "tiago18deolvieira@gmail",
  "tiagodeOliveira",
  (user) => {
    console.log(user);
    getVideoUserId(
      (videoId) => {
        console.log("videos do id tiago ", videoId);
      },
      (error) => [console.log(error)]
    );
    getVideo((videos) => {
      console.log("vídeos do user tiago ", videos);
    });
  },
  (error) => {
    console.log(error);
  }
);
