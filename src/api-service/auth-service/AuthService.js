import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const login = APIRoutes.getLoginUrl();
const singup = APIRoutes.getSignUpUrl();
const currentUser = APIRoutes.getCurrentUser();

const AuthService = {
    Login: async (userModel) => APIService.post<any>(login,userModel),
    SignUp: async (userModel) => APIService.post<string>(singup,userModel),
    GetUser: async (token) => APIService.post<string>(currentUser,token),
}
    
export default AuthService;