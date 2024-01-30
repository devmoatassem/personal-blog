import axios from "axios";
import { useContext } from "react";

export const uploadImage = async (file, acessToken) => {
  let imgURL = null;

  await axios
    .get(import.meta.env.VITE_SERVER + "/create/getUploadURL", {
      headers: {
        Authorization: `Bearer ${acessToken}`,
      },
    })
    .then(async ({ data: { uploadURL } }) => {
      // console.log("URL Accessed")
      await axios
        .put(uploadURL, file, {
          method: "PUT",
          url: uploadURL,
          headers: {
            "Content-Type": "image/jpeg",
          },
          data: file,
        })
        .then(() => {
          // console.log("URL Accessed2");
          imgURL = uploadURL.split("?")[0];
          console.log(imgURL);
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        });
    })
    .catch((err) => {
      // console.log("URL Accessed3");
      console.log(err);

      // throw new Error(err);
    });

  return imgURL;
};
