const { useContext } = React;

function Header() {
  const { timeframe, handleClick } = useContext(AppData);
  return (
    <header className="header">
      <div className="header-title">
        <img className="jer" src="../images/image-jeremy.png" />
        <div>
          <p>Report for</p>
          <h1 className="fs-h1 fw-light fc-white">Jeremy Robson</h1>
        </div>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <button className={`btn ${timeframe === "daily" ? "selected" : ""}`} onClick={handleClick}>
              Daily
            </button>
          </li>
          <li>
            <button className={`btn ${timeframe === "weekly" ? "selected" : ""}`} onClick={handleClick}>
              Weekly
            </button>
          </li>
          <li>
            <button className={`btn ${timeframe === "monthly" ? "selected" : ""}`} onClick={handleClick}>
              Monthly
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
