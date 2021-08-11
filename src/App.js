import Card from "./components/Card";
import planList from "./data.json";

function App() {
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {planList.map((plan) => (
            <Card data={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
