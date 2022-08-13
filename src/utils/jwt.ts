export const xAccessToken = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt")) {
      let user = localStorage.getItem("jwt");
      let token;
      if (user) {
        token = JSON.parse(user)?.accessToken;
      }
      return token;
    }
  }
};

export const userJwtData = (): string => {
  let user = "";
  let data: any = "";
  if (typeof window !== "undefined") {
    if (localStorage) {
      user = localStorage.getItem("jwt") || "";
      if (user) {
        data = JSON.parse(user);
      }
    }
  }
  return data;
};
