export default function MouseClicker() {

    const handleButtonClick = (event) => {
    if (event.target.name === "one") {

        console.log(event.target.name);
    } else if (event.target.name === "two") {
      
      console.log(event.target.querySelector("img").src); 
    }
  };

  
  const handleImageClick = (event) => {
    event.stopPropagation(); 
    console.log("Image clicked, but Button 2 click event is not triggered.");
  }; 

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        Button 1 (Click to print 'one')
      </button>

      <button name="two" onClick={handleButtonClick}>
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          onClick={handleImageClick} 
        />
        Button 2 (Click to print image src)
      </button>
    </div>
  );
}
