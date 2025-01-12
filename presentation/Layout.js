function Layout({ fetchData }) {
  return (
    <article className="app-container">
      <Header />
          {fetchData ? fetchData.map((card) => <Card title={card.title} data={card} />) : <h1>Loading</h1>}
    </article>
  );
}
