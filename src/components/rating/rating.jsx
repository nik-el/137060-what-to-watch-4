import React from "react";

const RATING_VALUES = [1, 2, 3, 4, 5];

export const Rating = React.memo(function Rating() {

  return <div className="rating">
    <div className="rating__stars">
      {
        RATING_VALUES.map((value) => (
          <React.Fragment key={value}>
            <input
              className="rating__input"
              key={value}
              id={`star-` + value} type="radio"
              name="rating"
              value={value}
            />
            <label className="rating__label" htmlFor={`star-` + value}>
              Rating {value}
            </label>
          </React.Fragment>
        ))
      }
    </div>
  </div>;
});
