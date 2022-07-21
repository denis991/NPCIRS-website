import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

/**
 *
 * @returns
 * запрос в redux
 * заготовка запроса на бек
 * рендер областей
 *
 */
function InputSelect() {
  const [territory, setTerritory] = useState('');
  const selectedOptionId = 0;
  // const dispatch = useDispatch();
  // const skills = useSelector((s) => s.territory);
  // useEffect(() => {
  //   dispatch(getTerritoryThunk());
  // }, []);
  return (
    <div className="d-flex flex-column justify-content-start string optional web_vacancies_search_form_city">
      <div className="input-group">
        <select className="ui compact selection dropdown" value={territory} onChange={(e) => setTerritory(e.target.value)} defaultValue={selectedOptionId}>
          <option value="">Територия</option>
          <option value="0100000000">Алтайский край</option>
          <option value="0300000000">Краснодарский край</option>
          <option value="0400000000">Красноярский край</option>
          <option value="0500000000">Приморский край</option>
          <option value="0700000000">Ставропольский край</option>
          <option value="0800000000">Хабаровский край</option>
          <option value="1000000000">Амурская область</option>
          {/*
          {territory && territory.map((territory) => (
            <option key={territory.id} value={territory.skill}>{territory.skill}</option>
          ))} */}
        </select>
      </div>
    </div>
  );
}

export default InputSelect;
