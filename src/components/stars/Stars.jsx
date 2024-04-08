import Star from "../star/Star";
import "./Stars.css";

function Stars({ count }) {

  function* generatorSequence(cnt) {
    for (let i = 1; i <= cnt; i += 1) {
      yield i;
    }
  }

  const cnt = parseInt(count);
  if (Number.isInteger(cnt) && cnt > 0 && cnt < 6) {
    const sequence = [...generatorSequence(cnt)];
    return (
      <ul className="card-body-stars">
        {sequence.map((idx) => <Star key={idx} />)}
      </ul>
    );
  } 
  return ("");
}

export default Stars