import React from 'react';
import ReactDOM from 'react-dom';

/*__sub__*/
/*__sub__*/

/*页面定制样式*/
import 'currentDir/client/style/index.scss';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Hello!!</div>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.querySelector('.wrapper')
);
