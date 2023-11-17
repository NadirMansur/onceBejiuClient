import { create } from "zustand";
import axios from "axios";

const prod_store = create((set, get) => {
  return {
    prod: [],
    setProd: async (url) => {
      const { data } = await axios.get(url);
      console.log("busque la data")
      const invertido = data.reverse();
      set({
        prod: [...invertido],
      });
    },
  };
});

export default prod_store;
