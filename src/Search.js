import colorNames from 'colornames';

const Search = ({ color, setColor, setHexValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            type="text"
            placeholder="Add color name"
            value={color}
            onChange={(e)=>{
                setColor(e.target.value);
                setHexValue(colorNames(e.target.value))
            }}
         />
    </form>
  )
}

export default Search