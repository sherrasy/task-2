import { getData } from "./swagger";

const button = document.querySelector<HTMLButtonElement>('#button');

button?.addEventListener('click', ()=> getData())
