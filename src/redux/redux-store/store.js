import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux-slice/user.slice";
import customizationReducer from "store/customizationReducer";
import newsReducer from "../redux-slice/news.slice";
import mapsReducer from "../redux-slice/maps.slice";
import postReducer from "../redux-slice/post.slice";
import productReducer from "../redux-slice/product.slice";
import taskReducer from "../redux-slice/task.slice";
import memberListReducer from "../redux-slice/member-list.slice";
import familyListReducer from "../redux-slice/family-list.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    customization: customizationReducer,
    news: newsReducer,
    maps: mapsReducer,
    post: postReducer,
    product: productReducer,
    task: taskReducer,
    member: memberListReducer,
    family: familyListReducer,
  },
});
