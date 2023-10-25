// Create handlers to increase and decrease vehicle count here
let car = 0;
let bike = 0;
let scooty = 0;
let bicyle = 0;
function handleDecrease(vehicle) {
  if (vehicle == 'car' && car != 0) car--;
  else if (vehicle == 'bike' && bike != 0) bike--;
  else if (vehicle == 'scooty' && scooty != 0) scooty--;
  else if (vehicle == 'bicyle' && bicyle != 0) bicyle--;
  //   console.log(count);
  rootElement.render(<App />);
}
function handleIncrese(vehicle) {
  if (vehicle == 'car') car++;
  else if (vehicle == 'bike') bike++;
  else if (vehicle == 'scooty') scooty++;
  else bicyle++;
  //   console.log(count);
  rootElement.render(<App />);
}
const App = () => (
  <>
    <p>List of all the vehicles count in the parking.</p>
    <ol>
      <li>
        <p>
          <b>Car:&emsp;{car} </b> &emsp;
          <button onClick={() => handleIncrese('car')}>Increase</button>
          <button onClick={() => handleDecrease('car')}>Decrease</button>
        </p>
      </li>
      <li>
        <p>
          <b>Bike:&emsp;{bike} </b> &emsp;
          <button onClick={() => handleIncrese('bike')}>Increase</button>
          <button onClick={() => handleDecrease('bike')}>Decrease</button>
        </p>
      </li>
      <li>
        <p>
          <b>Scooty: &emsp;{scooty}</b> &emsp;
          <button onClick={() => handleIncrese('scooty')}>Increase</button>
          <button onClick={() => handleDecrease('scooty')}>Decrease</button>
        </p>
      </li>
      <li>
        <p>
          <b>Bicycle:&emsp;{bicyle}</b> &emsp;
          <button onClick={() => handleIncrese('bicyle')}>Increase</button>
          <button onClick={() => handleDecrease('bicyle')}>Decrease</button>
        </p>
      </li>
    </ol>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);
