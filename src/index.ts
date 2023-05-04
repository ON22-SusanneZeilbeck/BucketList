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
 
// Eingabekontrolle
function controlInput() {
    if (!newgoalInput.value) {
        newgoalBtn.disabled = true;
        setcontrolMessage(controlMessages.INPUT_EMTPY, true);
        return false;}
    else {newgoalBtn.disabled = false;
        setcontrolMessage(controlMessages.INPUT_VALID);
        return true;}}
    // Audgabe bei Keiner Eingabe/ richtiger Eingabe
    function setcontrolMessage(msg: string, error = false) {
      controlMessage.innerHTML = msg;}
    const controlMessages = {
      INPUT_EMTPY: "What do you want to do?",
      INPUT_VALID: "Great, Press the Button or 'Enter' to add",};