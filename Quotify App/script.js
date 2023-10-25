const quotes = [];
const nameRef = React.createRef();
const quoteRef = React.createRef();

const clearInputs = () => {
  nameRef.current.value = '';
  quoteRef.current.value = '';
};

// create handleQuote function here
function handleQuote(e) {
  const name = nameRef.current.value;
  const quote = quoteRef.current.value;
  if (!name || !quote) return;
  if (e.key !== 'Enter') return;
  quotes.unshift({ name, quote });
  clearInputs();
  console.log(clearInputs);
  rootElement.render(<App />);
}

const App = () => (
  <div className="App">
    <h2>Quotify</h2>
    <div>
      <input type="text" placeholder="Name" ref={nameRef} />
      <input
        type="text"
        placeholder="quote"
        ref={quoteRef}
        onKeyPress={handleQuote}
      />
    </div>
    <div className="quotes">
      {quotes.map((q, i) => (
        <div key={i}>
          <i>"{q.quote}"</i>
          <b>~ {q.name}</b>
        </div>
      ))}
    </div>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);
