import axios from "axios";

export const uploadImage = async (file) => {
  let imgURL = null;

  await axios
    .get(import.meta.env.VITE_SERVER + "/getUploadURL")
    .then(async ({ data: { uploadURL } }) => {
      console.log(uploadURL);
      console.log(file);
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

          imgURL = uploadURL.split("?")[0];
          console.log(imgURL);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });

    return imgURL;
};
