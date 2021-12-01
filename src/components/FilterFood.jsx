import {useState} from "react"

export default function FilterFood(props){
    const [letter, setLetter] = useState("")

    function handleSelect(event){
        setLetter(event.target.value)
        props.filterMovies(event.target.value)
    }

    return(
        <div className="FilterFood">
        <label>Show movies by first letter:</label>
        <select value={letter} onChange={handleSelect}>
          <option selected disabled value="">Select a letter to filter</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        </div>
    )
}