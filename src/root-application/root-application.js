import {
  registerApplication,
  start
} from 'single-spa';


for (let index = 1; index <= 2; index++) {
  registerApplication(`app${index}`, () => import(`../app${index}/`), () => true);
}

start();