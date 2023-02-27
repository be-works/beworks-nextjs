/**
 * This file export all of type the Reducers
 * File is export only type, not the logic
 * thuong
 */

import About from "@/containers/About";
import App from "@/containers/App/App";
import Cart from "@/containers/Cart";
import Layout from "@/containers/Layout";
import Login from "@/containers/Login";
import Order from "@/containers/Order";
import ProductDetail from "@/containers/ProductDetail";
import Profile from "@/containers/Profile";
import SearchItem from "@/containers/SearchItem";
import Signup from "@/containers/Signup";
import Home from "@/pages";
import { combineReducers } from "redux";

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

//pages
const rootReducer = combineReducers({
  App,
  Home,
  About,
  Layout,
  Login,
  Signup,
  ProductDetail,
  Cart,
  Order,
  SearchItem,
  Profile,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
});

export default rootReducer;
