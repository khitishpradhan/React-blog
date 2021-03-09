import { combineReducers } from "redux";

import posts from "./posts";
import post from "./post";

export const reducers = combineReducers({ posts, post });
