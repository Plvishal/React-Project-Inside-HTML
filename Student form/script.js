let nameRef = React.createRef();
let marksRef = React.createRef();
let arr = [];

function handleSubmit(e) {
  e.preventDefault();

  arr.push(nameRef.current.value + ',' + marksRef.current.value);
  nameRef.current.value = '';
  marksRef.current.value = null;

  rootElement.render(<App />);
}
const Form = () => (
  <>
    <h1>Students' form</h1>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="number" placeholder="Marks" ref={marksRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  </>
);

const Result = () => (
  <table border="1">
    <thead>
      <tr>
        <th>Student's name</th>
        <th>Marks</th>
      </tr>
    </thead>

    <tbody>
      {arr.map((student, index) => (
        <tr key={index}>
          <td>{student.split(',')[0]}</td>
          <td>{student.split(',')[1]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const App = () => (
  <>
    <Form />
    <br />
    <Result />
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);
