const element = <h1>Hello, world!</h1>;

// embed js expressions in jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// jsx as an expression
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// attributes with jsx
const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// equal to

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};
