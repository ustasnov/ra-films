import { FC } from 'react';
import Star from "../star/Star";
import "./Stars.css";

interface StarsProps {
  count: number;
}

export const Stars: FC<StarsProps> = ({ count }) => {

  function* generatorSequence(cnt: number) {
    for (let i = 1; i <= cnt; i += 1) {
      yield i;
    }
  }

  if (Number.isInteger(count) && count > 0 && count < 6) {
    const sequence = [...generatorSequence(count)];
    return (
      <ul className="card-body-stars">
        {sequence.map((idx) => <Star key={idx} />)}
      </ul>
    );
  } 
  return ("");
}
