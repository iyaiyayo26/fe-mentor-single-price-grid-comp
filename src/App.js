function App() {
  return (
    <div className="container grid grid-rows-3 my-5 md:grid-rows-2">
      <div className="card-1 bg-white h-[200px] md:col-span-2">
        <article className="card-1-desc">
          <h4>Join our community</h4>
          <p>30-day, hassle-free money back guarentee</p>
          <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </article>
      </div>
      <div className="card-2 bg-Cyan-Ext h-[200px]">
        <article className="card-2-desc">
          <h4>Monthly Subscription</h4>
          <div className="flex">
            <h1>$29</h1>
            <p>per month</p>
          </div>
          <p>Full access for less than $1 a day</p>
        </article>
        <button>Sign Up</button>
      </div>
      <div className="card-3 bg-Cyan-Ext bg-opacity-60 h-[200px]">
        <article className="card-3-desc">
          <h4>Why Us</h4>
          <dl className="why-us-list">
            <dt>Tutorials by industry experts</dt>
            <dt>Peer & expert code review</dt>
            <dt>Coding exercises</dt>
            <dt>Access to our GitHub repos</dt>
            <dt>Community forum</dt>
            <dt>Flashcard decks</dt>
            <dt>New videos every week</dt>
          </dl>
        </article>
      </div>
    </div>
  );
}

export default App;
