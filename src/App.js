function App() {
  return (
    <div className="container grid grid-rows-3 my-5 md:grid-rows-2 font-Karla ">
      <div className="card-1 bg-white h-[250px] md:col-span-2 pt-5 pl-5 md:pt-10 md:pl-10 rounded-t-lg">
        <article className="card-1-desc ">
          <h4 className="text-Cyan-Ext font-bold text-lg md:text-xl mb-6">Join our community</h4>
          <p className="text-Bright-Yellow font-bold mr-10 mb-6 md:text-lg">30-day, hassle-free money back guarentee</p>
          <p className="text-gray-500 text-sm mr-14 tracking-wide md:mr-30 md:text-lg">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </article>
      </div>
      <div className="card-2 bg-Cyan-Ext h-[250px] pt-5 pl-5 md:pt-10 md:pl-10 md:rounded-bl-lg">
        <article className="card-2-desc text-white">
          <h4 className="font-bold mb-4 text-lg">Monthly Subscription</h4>
          <div className="flex mb-3">
            <h1 className="font-bold text-2xl">$29</h1>
            <p className="translate-y-1 ml-3 text-sm opacity-60">per month</p>
          </div>
          <p className="mb-5">Full access for less than $1 a day</p>
        </article>
        <div className="pr-24">
          <button className="bg-Bright-Yellow w-full py-3 rounded-md">
            <a
              href="http://"
              className="text-white text-lg
          "
            >
              Sign Up
            </a>
          </button>
        </div>
      </div>
      <div className="card-3 bg-Cyan-Ext bg-opacity-60 h-[250px] pt-5 pl-5 md:pt-10 md:pl-10 ">
        <article className="card-3-desc text-white">
          <h4 className="font-bold text-lg mb-3">Why Us</h4>
          <dl className="why-us-list text-sm">
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
