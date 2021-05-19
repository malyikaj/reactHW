


const Header = (props) => {
    return (
      <header>
        <h1>{ props.title }</h1>
        <span className = "stats">Items:</span>
      </header>
    );
   }

   export default Header