import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Liquid from './Liquid';
// import Time from './Time';
/**
 *
 * @returns
 * все страницы которые у насть есть
 */
function MainPagae() {
  return (
    <Routes>
      {/* <Route path="/" element={<Time />} /> */}
      <Route path="/" element={<div>Главная страница</div>} />
      <Route path="/oshs" element={<div>oshs</div>} />
      <Route path="/resources" element={<div>resources</div>} />
      <Route path="/medicinesall" element={<div>medicinesall</div>} />
      <Route path="/liquid" element={<Liquid />} />
      <Route path="/tasks" element={<div>tasks</div>} />
      <Route path="/redd" element={<div>redd</div>} />
      <Route path="/extract" element={<div>extract</div>} />
      <Route path="/medicines" element={<div>medicines</div>} />
      <Route path="/treatment" element={<div>treatment</div>} />
      <Route path="/mpe" element={<div>mpe</div>} />
      <Route path="/nraregister" element={<div>nraregister</div>} />

    </Routes>
  );
}

export default MainPagae;
