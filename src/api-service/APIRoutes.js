import APIConfig from "./APIConfig";

const APIRoutes = {
    getLoginUrl: () => APIConfig.URL + "api/users/login",
    getSignUpUrl: () => APIConfig.URL + "/api/users",
    getCurrentUser: () => APIConfig.URL + "user",   
}

export default APIRoutes;