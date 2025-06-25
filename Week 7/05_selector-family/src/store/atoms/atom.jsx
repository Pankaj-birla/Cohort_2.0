import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get:  (id) => async () => {
       new Response( r => setTimeout(r,15000));  // put timer to show loader
      const res = await axios(`http://localhost:3000/todo?id=${id}`);
      return res.data.todo
    },
  }),
});
