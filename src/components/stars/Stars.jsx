import Star from "../star/Star";
import "./Stars.css";

function Stars({ count }) {

  function* generatorSequence(cnt) {
    for (let i = 1; i <= cnt; i += 1) {
      yield i;
    }
  }

  if (Number.isInteger(count) || count < 1 || count > 5) {
    return ("");
  } else {
    const sequence = [...generatorSequence(count)];

    return (
      <ul className="card-body-stars">
        {sequence.map((idx) => <Star key={idx} />)}
      </ul>
    );
  }
}

export default Stars