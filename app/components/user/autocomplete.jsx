import React, { useState, useEffect } from 'react';

const Autocomplete = ({ suggestions, selectedTags, onSelect, onRemove }) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedSuggestions, setSelectedSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    console.log(...selectedTags);
    setSelectedSuggestions([...selectedTags]);
  }, []);

  useEffect(() => {
    setFilteredSuggestions(
      suggestions.filter(
        suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      )
    );
  }, [userInput]);

  const onClick = e => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput("");
    setSelectedSuggestions([...selectedSuggestions, e.currentTarget.innerText]);
    onSelect([...selectedSuggestions, e.currentTarget.innerText]);
  };

  const onRemoveSuggestion = (suggestion) => {
    setSelectedSuggestions(selectedSuggestions.filter(item => item !== suggestion));
    setUserInput('');
    onRemove([...selectedSuggestions, e.currentTarget.innerText]);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  const onChange = e => {
    setUserInput(e.currentTarget.value);
    setShowSuggestions(true);
  };

  const selectedSuggestionsComponent = (
    <div className="selected-suggestions">
      {selectedSuggestions?.map((suggestion, index) => (
        <div key={index} className="selected-suggestion">
          <span>{suggestion}</span>
          <button onClick={() => onRemoveSuggestion(suggestion)}>×</button>
        </div>
      ))}
    </div>
  );

  const suggestionsListComponent = showSuggestions ? (
    filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;

          if (index === activeSuggestion) {
            className = "suggestion-active";
          }

          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <em>No suggestions available.</em>
      </div>
    )
  ) : null;

  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
        {selectedSuggestionsComponent}
      </div>
    </React.Fragment>
  );
};

export default Autocomplete;