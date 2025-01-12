const { useContext } = React;

function Card({ title, data }) {
  const { timeframe } = useContext(AppData);
  return (
    <section className={`card ${title.toLowerCase().replace(" ", "-")}`}>
      <Image title={title} />
      <div className="card-content">
        <h2 className="fs-h2 fc-white fw-bold title">{title}</h2>
        <span className="dots">
          <img src="../images/icon-ellipsis.svg" />
        </span>
        <p className="fs-current fc-white fw-light current">{data.timeframes[timeframe].current}hrs</p>
        {window.innerWidth > 1080 ? <br /> : ""}
        <p className="fs-previous previous">
          {timeframe === "monthly" ? "Last Month" : timeframe === "weekly" ? "Last Week" : "Yesteday"} - {data.timeframes[timeframe].previous}hrs
        </p>
      </div>
    </section>
  );
}
