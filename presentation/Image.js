const { useContext } = React;

function Image({ title }) {
  const { images } = useContext(AppData);
  return (
    <div className={`img-wrapper img-container-${title.toLowerCase().replace(" ", "-")}`}>
      <img className="image" src={images[title.toLowerCase().replace(" ", "-")]} />
    </div>
  );
}
