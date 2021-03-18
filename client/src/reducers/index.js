import { combineReducers } from "redux";

import posts from "./posts";
import post from "./post";
import auth from "./auth";

export const reducers = combineReducers({ posts, post, auth });
