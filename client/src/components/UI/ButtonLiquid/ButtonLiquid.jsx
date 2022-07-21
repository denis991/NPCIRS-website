import React, { useState } from 'react';
import { Button } from 'reactstrap';
/**
 *
 * @returns
 * модель для отрисовки ещё меньшей части страницы с изминяеммым контентом
 */
function ButtonLiquid() {
  const [comp, setComp] = useState(1);
  return (
    <div>
      <ul className="nav nav-pills justify-content-center" role="navigation">
        <li className="nav-item active" style={{ marginRight: '0.5%', listStyle: 'none' }}>
          <Button color="primary" outline>
            <a className="nav-link px-3" data-bs-toggle="tab" href="#resume" onClick={() => setComp(1)}>1</a>
          </Button>
        </li>
        <li className="nav-item" style={{ marginRight: '0.5%', listStyle: 'none' }}>
          <Button color="primary" outline>

            <a className="nav-link px-3" data-bs-toggle="tab" href="#answers" onClick={() => setComp(2)}>
              2
            </a>
          </Button>
        </li>
        <li className="nav-itemЗ" style={{ marginRight: '0.5%', listStyle: 'none' }}>
          <Button
            color="primary"
            outline
          >
            <a className="nav-link px-3" data-bs-toggle="tab" href="#comments" onClick={() => setComp(3)}>
              3
            </a>
          </Button>
        </li>
        <li className="nav-itemЗ" style={{ marginRight: '0.5%', listStyle: 'none' }}>
          <Button color="primary" outline>
            <a className="nav-link px-3" data-bs-toggle="tab" href="#comments" onClick={() => setComp(4)}>
              4
            </a>
          </Button>
        </li>

      </ul>
      <div>
        {(comp === 1)
      && (
        // <ResumeUser userPage={userPage} />
        <div>1</div>
      )}
        {(comp === 2)
      && (
        // <CvsUser userPage={userPage} />
        <div>2</div>
      )}
        {(comp === 3)
      && (
        // <CommentsUser userPage={userPage} />
        <div>3</div>
      )}
        {(comp === 4)
      && (
        // <AnswersUser userPage={userPage} />
        <div>4</div>
      )}
      </div>
    </div>
  );
}

export default ButtonLiquid;
