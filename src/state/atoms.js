// src/state/atoms.js
import { atomWithStorage } from "jotai/utils";

export const bookmarkedPostsAtom = atomWithStorage("bookmarkedPosts", []);
