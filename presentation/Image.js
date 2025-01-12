function Image({ title }) {
  return (
    <div className={`img-wrapper img-container-${title.toLowerCase().replace(" ", "-")}`}>
      <img className="image" src={`../images/icon-${title.toLowerCase().replace(" ", "-")}.svg`} />
    </div>
  );
}
