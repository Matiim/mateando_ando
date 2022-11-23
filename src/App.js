import 'bootstrap/dist/css/bootstrap.min.css';	
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {Layout} from "./components/Layout/Layout"

function App() {
  return (
	<div>
		<main>
  			<Layout>
			<ItemListContainer />
			</Layout>
		</main>
	</div>
  );
}

export default App;

