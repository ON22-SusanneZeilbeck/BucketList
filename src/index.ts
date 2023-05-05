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
    
  //Anzeigen der Zielliste
function reloadgoals() { //empty the goals list
    goalsContainer.innerHTML = "";
    goals.sort((goal1, goal2) => {//sort goals by date
          return goal2.timestamp.getTime() - goal1.timestamp.getTime();})
          .forEach((goal) => {
          //create container for singlegoal
          const singlegoalContainer = document.createElement("div");
          singlegoalContainer.id = goal.id;
          singlegoalContainer.innerHTML = `
        <p style="${goal.reached && "text-decoration: line-through;"}">
        ${goal.description}</p>`;
          //create Delete Button
          const deleteBtn = document.createElement("button");
          deleteBtn.addEventListener("click", () => deletegoal(goal.id));
          deleteBtn.style.backgroundColor = "#352205";
          deleteBtn.innerHTML = "X";
          //create reached Button
          const reachedBtn = document.createElement("button");
          reachedBtn.addEventListener("click", () => toggleFinishedState(goal.id));
          if (goal.reached) {
            reachedBtn.innerHTML = "add goal";}
            else {reachedBtn.innerHTML = "reached";}
          //get the delete btn in
          singlegoalContainer.appendChild(reachedBtn);
          singlegoalContainer.appendChild(deleteBtn);
          //append it to the big goals container
          goalsContainer.appendChild(singlegoalContainer);
          //separator
          goalsContainer.appendChild(document.createElement("hr"));});}
    