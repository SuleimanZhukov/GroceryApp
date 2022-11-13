import { firebase } from "./config";

const storeRef = firebase.firestore().collection("store");

const fetch = async () => {
  storeRef.onSnapshot((querySnapshot) => {
    const comingData = [];
    querySnapshot.forEach((doc) => {
      const { title, subtitle, image, category, count, price } = doc.data();
      comingData.push({
        id: doc.id,
        title,
        subtitle,
        image,
        category,
        count,
        price,
      });
    });
    // console.log(comingData);
    return comingData;
  });
};

export default {
  fetch,
};
