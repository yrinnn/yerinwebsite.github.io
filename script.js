




document.addEventListener("DOMContentLoaded" , function(){
  function addanimation(noteselector , picselector){
    const note = document.querySelector(noteselector);
    const pic = document.querySelector(picselector);

    if(note && pic){
      note.addEventListener("mouseover", function(){
        pic.style.opacity = 1;
        pic.style.transition = '0.5s ease-in';
      });
      note.addEventListener("mouseout", function(){
        pic.style.opacity = 0;
        pic.style.transition = '0.5s ease-in';
      });
      
    }else{
      console.error(`The elements ${note} and ${pic} are not found`);
    }
  }
  addanimation('.notes', '.yerin-pic-1');
  addanimation('.notes-2', '.yerin-pic-2');
  addanimation('.notes-3', '.yerin-pic-3');
  addanimation('.notes-4', '.yerin-pic-4');
});

