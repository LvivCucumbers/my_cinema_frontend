import AsyncStorage from "@react-native-community/async-storage";


const StorageManager = {

    getAuthData: async ()  => {
        const storedUser = await AsyncStorage.getItem("user");
        return JSON.parse(storedUser) 
    },

    setAuthData: (data) => {
        AsyncStorage.setItem("userToken", data.user.token);
        AsyncStorage.setItem("user", JSON.stringify(data.user));
    },

    deleteAuthData: async () => {
        const promises = [];

        promises.push(AsyncStorage.removeItem("userToken"));
        promises.push(AsyncStorage.removeItem("user"));

        await Promise.all(promises);
    },
}

export default StorageManager;