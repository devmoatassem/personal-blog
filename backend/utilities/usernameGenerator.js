import User from "../schema/dbSchema/User.js";

const usernameGenerator = async (email) => {
    const username = email.split("@")[0];
    const alreadyExists = await User.exists({"personal_info.username": username}).then((res) => res);// (=> res) means return
    if(alreadyExists){
        return username + Math.floor(Math.random() * 1000);
    }
    return username;
}

export default usernameGenerator;