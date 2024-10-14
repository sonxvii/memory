import {images} from "../src/data.js"
import {Card} from "../src/components/card/Card"
export function Grid () {
  return (
    <div className="App">
 
    </div>
    images.map ((item) => (
      <Card
      key = {item.id}
      path = {item.url}
      />
    ))
  );
}

export default App;