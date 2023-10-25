var score = 0;
var wicket = 0;
let ballWiseRes = [];
let hit = 0;
let inputRef = React.createRef();

function addScore(num) {
  hit = num;
  renderRoot();
}

function wicketDown() {
  hit = 'Out';
  renderRoot();
}

function handleSubmit(event) {
  event.preventDefault();

  if (hit == 'Out') {
    wicket += 1;
  } else {
    score += hit;
  }

  ballWiseRes.unshift(
    <span>{`${hit == 0 ? 'DOT' : hit} , ${inputRef.current.value}`}</span>
  );

  hit = 0;
  inputRef.current.value = '';

  renderRoot();
  console.log(inputRef.current.value);
}

const Form = () => (
  <form onSubmit={handleSubmit}>
    <input value={hit} className="border rounded w-32 text-center m-2 " />
    <input
      placeholder="Add a comment"
      ref={inputRef}
      className="border rounded  text-center m-2  w-32"
    />
    <button className="border px-2 rounded-lg text-white shadow-xl m-2 hover:bg-red-800">
      {' '}
      Submit{' '}
    </button>
  </form>
);

const ScoreButtons = () => (
  <div className="flex justify-center gap-x-3 mb-7">
    <button
      onClick={() => addScore(0)}
      className="bg-red-400 w-9 py-2 rounded-lg shadow-xl text-white"
    >
      0
    </button>
    <button
      onClick={() => addScore(1)}
      className="bg-red-400 w-9 py-2 rounded-lg shadow-xl text-white"
    >
      1
    </button>
    <button
      onClick={() => addScore(2)}
      className="bg-red-400 w-9 py-2 rounded-lg shadow-xl text-white"
    >
      2
    </button>
    <button
      onClick={() => addScore(3)}
      className="bg-red-400 w-9 py-2 rounded-lg shadow-xl text-white"
    >
      3
    </button>
    <button
      onClick={() => addScore(4)}
      className="bg-red-400 w-9 py-2 rounded-lg shadow-xl text-white"
    >
      4
    </button>
    <button
      onClick={() => addScore(5)}
      className="bg-red-400 w-9 py-2 rounded-lg shadow-xl text-white"
    >
      5
    </button>
    <button
      onClick={() => addScore(6)}
      className="bg-red-400 w-9 py-2 rounded-lg shadow-xl text-white"
    >
      6
    </button>
    <button
      onClick={wicketDown}
      className="bg-red-400  py-2 px-2 rounded-lg shadow-xl text-white"
    >
      Wicket
    </button>
  </div>
);

const App = () => (
  <>
    <div className="w-full h-screen bg-red-400">
      <div className="justify-center w-2/4  p-10 m-auto bg-rose-700  rounded-xl ">
        <h1 className="text-3xl py-2 w-full text-white shadow-xl m-auto">
          {' '}
          Score Keeper App{' '}
        </h1>
        <h2 className="py-5 text-2xl text-white shadow-xl m-4">
          Score: {score} / {wicket}
        </h2>
        <ScoreButtons />
        <br />
        <br />
        <Form />
        <hr />
      </div>
      <div className="w-96 m-auto mt-8 ">
        {ballWiseRes.map((res, index) => (
          <p key={index + 1}>{res}</p>
        ))}
      </div>
    </div>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
function renderRoot() {
  rootElement.render(<App />);
}

renderRoot();
