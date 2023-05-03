//DOM
const newgoalInput = document.querySelector("#newgoalInput") as HTMLInputElement;
const newgoalBtn = document.querySelector("#newgoalBtn") as HTMLButtonElement;
const controlMessage = document.querySelector("#controlMessage") as HTMLSpanElement;
const goalsContainer = document.querySelector("#goalsContainer") as HTMLDivElement;
const locationElement = document.getElementById("location") as HTMLElement;
const date_time_el = document.getElementById("date-time") as HTMLElement;
//
interface goal {
  description: string;
  id: string;
  reached: boolean;
  timestamp: Date;}