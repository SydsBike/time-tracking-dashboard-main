// App Component

const { useState, useEffect } = React;
const urlToFetch = "./data.json";
const AppData = React.createContext();

function App() {
  // initialize data state
  const [fetchData, setFetchData] = useState(null);

  // fetch and set data state

  useEffect(() => {
    fetch(urlToFetch)
      .then((response) => {
        if (!response.ok) {
          return response;
        }
        const jsonResponse = response.json();
        return jsonResponse;
      })
      .then((jsonResponse) => {
        setFetchData(jsonResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // initilize button states
  const [timeframe, setTimeframe] = useState("monthly");

  // handle button click to set button state
  function handleClick({ target }) {
    const time = target.innerText.toLowerCase();
    setTimeframe(time);

    console.log(typeof timeframe);
  }

  return (
    <AppData.Provider value={{ timeframe, handleClick }}>
      <main className="main-container">
        <Layout fetchData={fetchData} />
      </main>
    </AppData.Provider>
  );
}
// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
