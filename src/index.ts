//DOM
const newgoalInput = document.querySelector("#newgoalInput") as HTMLInputElement;
const newgoalBtn = document.querySelector("#newgoalBtn") as HTMLButtonElement;
const controlMessage = document.querySelector("#controlMessage") as HTMLSpanElement;
const goalsContainer = document.querySelector("#goalsContainer") as HTMLDivElement;
export const locationElement = document.getElementById("location") as HTMLElement;
export const date_time_el = document.getElementById("date-time") as HTMLElement;
export const saveBtn = document.querySelector("#saveBtn") as HTMLButtonElement;
export const resetBtn = document.querySelector("#resetBtn") as HTMLButtonElement;

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
    // Ausgabe bei Keiner Eingabe/ richtiger Eingabe
    function setcontrolMessage(msg: string, error = false) {
      controlMessage.innerHTML = msg;}
    const controlMessages = {
      INPUT_EMTPY: "What do you want to do?",
      INPUT_VALID: "Great, Press the Button or 'Enter' to add",};

      // Hauptfunktion
function initApp() {
    newgoalBtn.disabled = true;
    newgoalBtn.addEventListener("click", addgoal);
    newgoalInput.addEventListener("input", controlInput);
    newgoalInput.addEventListener("keydown", hasPressedEnterKeyOngoalInput);
    saveBtn.addEventListener("click", saveChanges);
    resetBtn.addEventListener("click", clearStorage);}
  initApp();
  //
  function hasPressedEnterKeyOngoalInput(e: KeyboardEvent) {
    if (e.key === "Enter") {
      addgoal();  }}
  
  // Hinzufügen von Zielen
  let goals: goal[] = [];
  function addgoal() {
    if (!controlInput()) {return; }
    const timestamp = new Date();
    const newgoal: goal = {
      description: newgoalInput.value,
      id: `${timestamp.getTime()}-rn-${Math.floor(Math.random() * 999)}`,
      reached: false,
      timestamp,};
    goals.push(newgoal);
    reloadgoals();
    //empty input
    newgoalInput.value = "";}
  