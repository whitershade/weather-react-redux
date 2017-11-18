import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;

  margin-bottom: 15px;
  margin-top: 15px;
`;

const StyledInput = styled.input`
  width: 200px;
  margin-right: 10px;
  padding: 0.75rem;
`;

const StyledButton = styled.button`
  width: 90px;

  margin-right: 10px;
`;

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);

    this.formOnSubmit = this.formOnSubmit.bind(this);
    this.searchOnChange = this.searchOnChange.bind(this);
    this.clearSearchInput = this.clearSearchInput.bind(this);

    this.state = {
      searchText: 'Odessa',
    };
  }

  searchOnChange({ target: { value: searchText } }) {
    this.setState({
      searchText,
    });
  }

  clearSearchInput(event) {
    event.preventDefault();

    this.setState({
      searchText: '',
    });
  }

  formOnSubmit(event) {
    event.preventDefault();

    this.props.loadWeather(this.state.searchText);
  }

  render() {
    const {
      formOnSubmit,
      searchOnChange,
      props: { isLoading },
      state: { searchText },
    } = this;

    return (
      <StyledForm onSubmit={formOnSubmit}>
        <StyledInput value={searchText} onChange={searchOnChange} />
        <StyledButton disabled={isLoading}>Send</StyledButton>
        <StyledButton onClick={this.clearSearchInput}>Clear</StyledButton>
      </StyledForm>
    );
  }
}

SearchBar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadWeather: PropTypes.func.isRequired,
};
