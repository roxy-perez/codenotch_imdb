import { Movie } from "./movie";
import { Professional } from "./professional";
import { elijah, peter } from "./testProfessional";

let cate = new Professional(
  "Cate Blanchett",
  53,
  59,
  1.74,
  false,
  "australian",
  2,
  "actor"
);

let tolkien = new Professional(
  "J. R. R. Tolkien",
  81,
  0,
  1.74,
  false,
  "english",
  0,
  "writer"
);

let movie1 = new Movie(
  "The Lord of the Rings: The Fellowship of the Ring",
  2001,
  "american",
  "Fantasy"
);

console.log("\n--- :: Movies :: ---\n")
movie1.actors = [elijah, cate];
movie1.director = peter;
movie1.writer = tolkien;
movie1.printAllMovies();
