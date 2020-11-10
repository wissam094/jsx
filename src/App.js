import logo from './logo.svg';
import image from './1.jpg'
import image2 from './2.jpg'
function App() {
  return (

      <div className="App">
        
           <div style={{maxWidth:"100vw",textAlign:"center"}}>
          <h1 className="title red">Wissam</h1>
          <br />
          <img src={image} alt=""  width="300px"/>
            <br />
            <img src={image2} alt="" />
             </div>
                <div style={{maxWidth:"100vw",textAlign:"center"}}>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/afMdO8ZtqG8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </div>
      </div>
    );
  }

export default App;
