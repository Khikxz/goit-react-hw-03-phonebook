import React, { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  handleFilterChange = e => {
    this.props.setFilter(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <div className={css.divFilter}>
        <p>Find Contacts by Name</p>
        <input
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}