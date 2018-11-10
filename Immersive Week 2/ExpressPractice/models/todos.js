'use strict';

let tasks = {}; // a place to store tasks by person

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    // returns an array of all people for whom tasks exist
    let ans = [];
    for(let name in tasks){
      if(tasks.hasOwnProperty(name)){
        ans.push(name);
      }
    }
    return ans;
  },

  add: function (name, task) {
    if(!task.hasOwnProperty('complete')){
      task.complete = false; 
    }
    if(!tasks[name]){
      tasks[name] = [task];
    }
    else{
      tasks[name].push(task);
    }
  },
  

  complete: function(name, index){
    if(!tasks[name][index].complete){
      tasks[name][index].complete = !tasks[name][index].complete;
    }
  },

  list: function (name){
      return tasks[name];
  },



  remove: function (name, index){
    tasks[name] = [...tasks[name].slice(0, index), ...tasks[name].slice(index + 1)];
  }
};

