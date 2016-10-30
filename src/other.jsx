const React = require('react');
const ReactDOM = require('react-dom');

const OtherComponent = () =>
  <div>Other Page</div>;

ReactDOM.render(
  <OtherComponent />,
  document.getElementById('react-container')
);
