import React from 'react';
import '../stylesheets/Filters.scss';

const Filters = props => {
  const handleFilterName = ev => {
    props.handleFilters ({
      filterInputName: ev.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault ();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input
          className="form__input-text"
          type="text"
          id="filterName"
          value={props.filterName}
          onChange={handleFilterName}
        />
      </div>
    </form>
  );
};

export default Filters;
