import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {

  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        {...entry}
      />
    )
  })

  return (
    <div className="journal-page">

      {/* LEFT SIDE */}
      <aside className="scrapbook-side">
       <div className="flight-path">

  <svg viewBox="0 0 250 900">
    <path
      d="M40 20
         C190 70, 30 160, 170 220
         C250 280, 70 380, 180 470
         C260 540, 60 650, 170 740
         C220 790, 120 850, 190 880"
    />
  </svg>

  <span className="flying-plane">✈</span>

</div>
  
        <div className="airmail">
          ✈ VIA AIR MAIL
        </div>

        <div className="owner-note">
          This travel journal
          <br />
          belongs to:
          <br />
          <strong>Vrusha ♡</strong>
        </div>
        <div className="map-paper">
  <div className="map-tape"></div>

  <span>🗺️</span>
  <p>Next Adventure</p>
  <small>Tokyo • Sydney • Norway</small>
</div>

        <div className="packing-tag">
          Packing
          <br />
          List
        </div>

        <div className="ticket">
          ✈ BOARDING PASS
          <br /><br />
          JAPAN → AUS → NORWAY
          <br />
          Seat 19A
        </div>

        <div className="stamp">
          FRAGILE
        </div>
        <div className="map-note">
  🗺️
  <br />
  Explore
  <br />
  More
</div>

<div className="passport-stamp">
  PASSPORT
  <br />
  17 SEP
  <br />
  TRAVEL
</div>

<div className="small-ticket">
  ✈ FLIGHT
  <br />
  GATE 08
  <br />
  BOARDING 10:30
</div>

      </aside>


      {/* RIGHT WHITE PAPER */}
      <main className="paper-side">

        <Header />

        <div className="entries">
          {entryElements}
        </div>

      </main>

    </div>
  )
}