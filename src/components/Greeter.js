import React from "react"

function Greeter(props) {
    const date = new Date()
    const hour = date.getHours()
    let greeting = "Error"
    const styles = {
        fontSize: 40,
    }

    if (hour < 12) {
        greeting = `Good Morning, ${props.username}!`
        styles.color = "#191E24"
    } else if (hour < 17) {
        greeting = `Good Afternoon, ${props.username}!`
        styles.color = "#191E24"
    } else if (hour < 22) {
        greeting = `Good Evening, ${props.username}!`
        styles.color = "#191E24"
    } else {
        greeting = "!! GO TO BED >:( "
        // styles.color = "red"
        // styles.backgroundColor = "red"
    }
    
   
    return (
        <div style={styles}>
            {greeting} 
        </div>
    )
}

export default Greeter