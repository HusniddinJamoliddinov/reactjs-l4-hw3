import "./footer.scss"


const Footer = () => {
  return ( 
    <div className="footer d-flex align-items-center justify-content-center">
      <ul className="list d-flex align-items-start">
        <li className="item">
            <h4 className="title">features</h4>
          <ul className="inner-list">
            <li className="inner-list-item">cool stuff</li>
            <li className="inner-list-item">random feature</li>
            <li className="inner-list-item">team feature</li>
            <li className="inner-list-item">stuff for developers</li>
            <li className="inner-list-item">another one</li>
            <li className="inner-list-item">last time</li>
          </ul>
        </li>
        <li className="item">
            <h4 className="title">resources</h4>
          <ul className="inner-list">
            <li className="inner-list-item">cool stuff</li>
            <li className="inner-list-item">random feature</li>
            <li className="inner-list-item">team feature</li>
            <li className="inner-list-item">stuff for developers</li>
          </ul>
        </li>
        <li className="item">
            <h4 className="title">about</h4>
          <ul className="inner-list">
            <li className="inner-list-item">cool stuff</li>
            <li className="inner-list-item">random feature</li>
            <li className="inner-list-item">team feature</li>
            <li className="inner-list-item">stuff for developers</li>
          </ul>
        </li>
      </ul>
    </div>
   );
}
 
export default Footer;