import "./hero.scss";

const Hero = () => {
  return ( 
    <div className = "hero d-flex flex-column align-items-center">
      <h2 className="title text-center mb-3">Pricing</h2>
      <p className="description mb-3">
      Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
      </p>
      <ul className="list d-flex align-items-start">
        <li className="item">
          <h5 className="title">free</h5>
          <div className="info">
            <h4 className="title">$0<span>/mo</span></h4>
            <ul className="inner-list">
              <li className="item">10 users included</li>
              <li className="item">20 GB of storage</li>
              <li className="item">Email support</li>
              <li className="item">Help center acces</li>
            </ul>
            <button className="btn">Sign up for free</button>
          </div>
        </li>
        <li className="item">
          <h5 className="title">pro</h5>
          <div className="info">
            <h4 className="title">$15<span>/mo</span></h4>
            <ul className="inner-list">
              <li className="item">10 users included</li>
              <li className="item">10 GB of storage</li>
              <li className="item">Priority email support</li>
              <li className="item">Help center access</li>
            </ul>
            <button className="btn">get started</button>
          </div>
        </li>
        <li className="item">
          <h5 className="title">enterprise</h5>
          <div className="info">
            <h4 className="title">$29<span>/mo</span></h4>
            <ul className="inner-list">
              <li className="item">30 users included</li>
              <li className="item">15 GB of storage</li>
              <li className="item">Phone and email support</li>
              <li className="item">Help center access</li>
            </ul>
            <button className="btn">contact us</button>
          </div>
        </li>
      </ul>
    </div>
   );
}
 
export default Hero;
