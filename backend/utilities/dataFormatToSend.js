import jwt from 'jsonwebtoken';

export const dataFormatToSend = (data) => {
    const { _id, personal_info } = data;
    const acessToken = jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    const { fullname, email, username, profile_img } = personal_info;
    console.log(acessToken);
    return {
        acessToken,
        fullname,
        email,
        username,
        profile_img,
    }
}
