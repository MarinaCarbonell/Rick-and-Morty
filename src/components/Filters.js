import React from 'react';

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
          type="text"
          className="form__input-text"
          id="filterName"
          value={props.filterName}
          onChange={handleFilterName}
        />
      </div>
    </form>
  );
};

export default Filters;
