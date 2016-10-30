const React = require('react');
const ReactDOM = require('react-dom');

const IndexComponent = () =>
  <div>Index Page</div>;

ReactDOM.render(
  <IndexComponent />,
  document.getElementById('react-container')
);
