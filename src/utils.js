export const encourage = () => {
    alert("You can do it!");
}

export const pickRandomTask = (todos) => {
    if (todos.length > 0) {
      let randomTask
      let randomIndex
      let attempts = 0
      const maxAttempts = todos.length * 10 // or some other reasonable number

      //Create list of incomplete
      //find random index of that list
      //extract index of the randomly chosen incomplete task

      do {
        randomIndex = Math.floor(Math.random() * todos.length);
        randomTask = todos[randomIndex];
        attempts++
      } while (randomTask.completed === true && attempts < maxAttempts)
      if (attempts < maxAttempts) {
        alert(randomTask.text);
      } else {
        alert("You did them all, Great work!")
      }
    } else {
      alert("No tasks available!");
    }
}