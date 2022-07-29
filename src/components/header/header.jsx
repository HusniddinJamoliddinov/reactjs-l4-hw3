import "./header.scss"

const Header = () => {
  return ( 
    <div className = "header shadow d-flex px-5 py-3 mb-3 border-bottom bg-white align-items-center justify-content-between">
      <div className="logo ">company name</div>
      <div className="navbar d-flex ">
        <ul className="navbar__list me-5 mb-0 d-flex gap-3">
          <li className="navbar__list__item">features</li>
          <li className="navbar__list__item">enterprice</li>
          <li className="navbar__list__item">support</li>
          <li className="navbar__list__item">pricing</li>
        </ul>
        <button className="btn border-info" >Sign In </button>
      </div>
    </div>
   );
}
 
export default Header