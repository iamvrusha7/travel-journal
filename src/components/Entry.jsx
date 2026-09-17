export default function Entry(props) {
  return (
    <article className="journal-entry">

     <div className="photo-frame">
  <div className="tape"></div>

  <img
    className="main-image"
    src={props.image}
    alt={props.title}
  />
</div>
      <div className="entry-info">

        <div className="location">
          <span>📍</span>
          <span>{props.country}</span>

          <a
            href={props.googleMapsLink}
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <h2>{props.title}</h2>

        <p className="trip-date">
          {props.dates}
        </p>

        <p className="description">
          {props.text}
        </p>

      </div>

    </article>
  )
}