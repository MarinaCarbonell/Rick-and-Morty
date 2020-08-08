import React from 'react';

const Filters = props => {
  const handleFilterName = ev => {
    props.handleFilters ({
      filterInputName: ev.target.value,
    });
  };
  return (
    <form className="form">
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
