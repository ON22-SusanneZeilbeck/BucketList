const saveBtn = document.querySelector("#saveBtn") as HTMLButtonElement;
const resetBtn = document.querySelector("#resetBtn") as HTMLButtonElement;

let text = document.getElementById('goalsContainer');
        if (text){let myData;
        let postData = window.localStorage.getItem("save");
        if (postData == null || postData == '') {
            myData = text.innerHTML;
            window.localStorage.setItem("save", myData);
            text.classList.remove('changed');}
            else { text.innerHTML = postData;
            text.classList.add('changed');}}
      function saveChanges() {
          if (text){
            let myData;
            myData = text.innerHTML;
            window.localStorage.setItem("save", myData);
            text.classList.add('changed');}}
      function clearStorage() {
          if (text){
            let reset = text.innerHTML;
            text.classList.remove('changed');
            window.localStorage.clear();
            text.innerHTML = reset;}}

export {saveChanges, clearStorage, saveBtn, resetBtn};