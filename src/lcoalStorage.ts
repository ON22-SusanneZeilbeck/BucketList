import { saveBtn, resetBtn } from "./index";

let text = document.getElementById('goalsContainer');
        if (text){let myData;
        let postData = window.localStorage.getItem("save");
        // if no data
        if (postData == null || postData == '') {
            myData = text.innerHTML;
            // store default value
            window.localStorage.setItem("save", myData);
            // make it placeholder style
            text.classList.remove('changed');
        } else { text.innerHTML = postData;
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

