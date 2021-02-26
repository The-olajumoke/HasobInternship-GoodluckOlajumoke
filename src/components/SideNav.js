import Arrow from "./../images/Arrow.png"
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import FilterList from "@material-ui/icons/FilterList"
import "./sideNav.css"

function SideNav() {
   
return (
  <div className="navCont">
    <div className="nav__Dept">
      <FilterList className="side__FilterIcon" />
      <span> Departments</span>
    </div>

    <div className="nav">
      <input type="checkbox" id="menu" />
      <label htmlFor="menu" id="nav-icon">
        All Categories
      </label>
      <div className="multi-level">
        <div className="item">
          <input type="checkbox" id="B" />
          <img src={Arrow} className="arrow" alt="arrow" />
          <label htmlFor="B">EcommercePattern</label>
          <ul>
            <li>
              <div className="sub-item">
                <input type="checkbox" id="B-A" />

                <img src={Arrow} className="arrow" alt="arrow" />
                <label htmlFor="B-A">Electronics</label>
                <ul>
                  <div className="sub-item">
                    <input type="checkbox" id="B-B" />
                    <img src={Arrow} className="arrow" alt="arrow" />
                    <label htmlFor="B-B">Phones</label>
                    <ul>
                      <li>Cell phone Accessroeis</li>
                      <li>cell phone gadgets</li>
                      <li>cell phone gadgets</li>
                      <li>cell phone gadgets</li>
                      <li>cell phone gadgets</li>
                    </ul>
                  </div>
                </ul>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>

    <div className=" sideBtn">
      <span>Show More</span>
      <ArrowDropDown />
    </div>
  </div>
);

}











export default SideNav