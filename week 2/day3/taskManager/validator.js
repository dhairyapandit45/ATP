
     function validateTitle(title) {
           if(!title){
          return "invalid, char req";
         }
       if(title.length<3){
        return "min 3char req ";
       }
           return "true";
                  }
                      
            // 2. Validate priority (must be: low, medium, high)
     function validatePriority(priority) {
             if(priority=="low"||priority=="medium"||priority=="high")
                      return true;
                  else
                      return false;
                      }
                      
     // 3. Validate due date (must be future date)
     function validateDueDate(date) {
                let today =new Date();
                const dueDate=new Date(date);
                return dueDate>today? true:console.log("enter future date");

         }

         export{validateTitle,validatePriority,validateDueDate}
