"use client";

import { useState, useEffect } from 'react';
import Autocomplete from '../../components/user/autocomplete.jsx';

export default () => {
  const [nameState, setNameState] = useState('');
  const [adressState, setAdressState] = useState('');
  const [nameDraftState, setNameDraftState] = useState('');
  const [adressDraftState, setAdressDraftState] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedDraftTags, setSelectedDraftTags] = useState([]);
  const [isEditState, setIsEditState] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState([]);
  
  const handleSelect = (item) => {
    setSelectedDraftTags([...item]);
  };

  const handleRemove = (item) => {
    setSelectedDraftTags([...item]);
  };

  useEffect(() => {
    const fetchtData = async() => {
      try {
        const userId = 1;
        const response = await fetch(`/api/user/?params=${userId}`, {
          method: "GET",
        });
        const data = await response.json();
        const userData = data.data;
        setNameState(userData.name);
        setAdressState(userData.adress);
        setSelectedTags(userData.tags);
        setNameDraftState(userData.name);
        setAdressDraftState(userData.adress);
        setSelectedDraftTags(userData.tags);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchtData();

    setSuggestionsList([
      'test1',
      'test2',
      'test3',
    ]);
  }, []);

  function saveUser() {
    fetch("/api/user/", {
      method: "PUT",
      body: JSON.stringify(
        {
          name: nameDraftState,
          adress: adressDraftState,
          tags: selectedDraftTags,
        }
      ),
    }).then((response) => {
      response.json().then((data) => {
        setNameState(nameDraftState);
        setAdressState(adressDraftState);
        setSelectedTags(selectedDraftTags);
        setIsEditState(false);
      });
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <div>
        <h1>基本情報入力</h1>
        {
          !isEditState && (
            <button
              onClick={() => {
                setIsEditState(true);
              }}
            >
              編集する
            </button>
          )
        }
      </div>
      <dl>
        <dt>名前</dt>
        <dd>
          {
            isEditState ? (
              <input
                type="text"
                value={nameDraftState}
                placeholder="名前を入力してください"
                onChange={(event)=> {
                  setNameDraftState(event.target.value)
                }}
              />
            ) : (
              <span>{nameState}</span>
            )
          }
        </dd>
      </dl>
      <dl>
        <dt>住所</dt>
        <dd>
        {
          isEditState ? (
            <input
              type="text"
              value={adressDraftState}
              placeholder="住所を入力してください"
              onChange={(event)=> {
                setAdressDraftState(event.target.value)
              }}
            />
          ) : (
            <span>{adressState}</span>
          )
        }
        </dd>
      </dl>
      <dl>
        <dt>タグ</dt>
        <dd>
          {
            isEditState ? (
              <Autocomplete
                suggestions={suggestionsList}
                selectedTags={selectedTags}
                onSelect={handleSelect}
                onRemove={handleRemove}
              ></Autocomplete>
            ) : (
              <span>{selectedTags}</span>
            )
          }
        </dd>
      </dl>
      {
        isEditState && (
          <div>
            <button
              onClick={() => {
                saveUser();
              }}
            >
              保存する
            </button>
            <button
              onClick={() => {
                setNameDraftState(nameState);
                setAdressDraftState(adressState);
                setSelectedDraftTags(selectedTags);
                setIsEditState(false);
              }}
            >
              キャンセル
            </button>
          </div>
        )
      }
    </div>
  );
};
