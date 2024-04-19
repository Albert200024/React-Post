import { useState, useRef } from "react"
import "./css/header.css"
import "./css/headerMedia.css"
import searchIqon from "../img/search.png"
import logo from "../img/logo.png"
import downSlaq from "../img/chevron-down.png"
import mobileMenuBtn from "../img/mobileMenuBtn.png"
import close from "../img/close.png"
import MobileMenuAccardion from "./MobileMenuAccardion"


export default function Header(){
    const [bool, setBool] = useState(false)
    const [active, setActive] = useState(null);
    
    const faqs = [
        {
            id: 1,
            header: "Demos",
            text: ["Demos Header", "Demos Layout", "Demos Buttons", "Demos Post", "Demos see"]
        },
        {
            id: 2,
            header: "Post",
            text: ["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post"]
        },
        {
            id: 3,
            header: "Features",
            text: ["Features Header", "Features Layout", "Features Buttons", "Features Post", "Features See"]
        },
        {
            id: 4,
            header: "Categories",
            text: ["Categories Header", "Categories Layout", "Categories Buttons", "Categories Post", "Categories See"]
        },
        {
            id: 5,
            header: "Shop",
            text: ["Shop Header", "Shop Layout", "Shop Buttons", "Shop Post", "Shop See"]
        }
    ]

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    
    function handleChange(){
        setBool(!bool)
    }
    
    return (
        <div className="Header ">
              <div className="headerLogoSearchBlock containerWidth">
                  <div className="headerLogoSearchBlockLogo">
                     <a href="#">
                        <img src={logo} alt="" />
                     </a>
                  </div>
                  <div className="headerLogoSearchBlockSearch">
                      <a href="##"><img src={searchIqon}/></a>
                  </div>
              </div>
              <div className="mobileHeader containerWidth">
                 <div className="mobileHeaderBlock">
                     <div className="mobileHeaderBlockBtn"> 
                         <button onClick={handleChange}>
                              <img src={mobileMenuBtn} alt="" />
                         </button>
                     </div>
                     <div className="mobileHeaderBlockLogo">
                        <a href=""><img src={logo} alt="" /></a>
                     </div>
                     <div className="mobileHeaderBlockSearch">
                        <a href="##"><img src={searchIqon}/></a>
                     </div>
                 </div>
              </div>
              <div className="headerMenuBlock">
                   <div className="headerMenuBlockMenu ">
                        <ul className="menuList">
                            <li className="dropdown dropdownDemos">
                                <a href="##" className="dropdownBtn">Demos <img src={downSlaq}/></a>
                                <ul className="dropdonwContent dropdonwContentDemos"> 
                                    <li>
                                        <div className="dropdonwContentItem">
                                            <a href="">Demos Header</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Demos Layout </a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Demos Buttons</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Demos Post</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Demos see</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdownPost">
                                <a href="##" className="dropdownBtn">Post <img src={downSlaq}/></a>
                                <ul className="dropdonwContent dropdonwContentPost"> 
                                    <li>
                                       <div className="dropdonwContentItem">
                                            <a href="">Post Header</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Post Layout </a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Share Buttons</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Gallery Post</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Video Post</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdownFeatures">
                                <a href="##" className="dropdownBtn">Features <img src={downSlaq}/></a>
                                <ul className="dropdonwContent dropdonwContentFeatures"> 
                                    <li>
                                        <div className="dropdonwContentItem">
                                            <a href="">Features Header</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Features Layout </a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Features Buttons</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Features Post</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Features See</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdownCategories">
                                <a href="##" className="dropdownBtn">Categories <img src={downSlaq}/></a>
                                <ul className="dropdonwContent dropdonwContentCategories"> 
                                    <li>
                                        <div className="dropdonwContentItem">
                                            <a href="">Categories Header</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Categories Layout </a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Categories Buttons</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Categories Post</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Categories See</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdownShop">
                                <a href="##" className="dropdownBtn">Shop <img src={downSlaq}/></a>
                                <ul className="dropdonwContent dropdonwContentShop"> 
                                    <li>
                                        <div className="dropdonwContentItem">
                                            <a href="">Shop Header</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Shop Layout </a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Shop Buttons</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Shop Post</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                    <li className="m-top ">
                                        <div className="dropdonwContentItem">
                                            <a href="">Shop See</a>
                                            <img src={downSlaq} alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="buyNow">
                                <a href="##" className="dropdownBtn">Buy Now </a>
                            </li>
                        </ul>
                   </div>
              </div>
              <div className={"headerMobileMenuBlock" + (bool ? " open" : " close")}>
                    <div className="mobileMenuCloseBtnBlock">
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                       <button className="mobileMenuCloseBtn" onClick={()=> setBool(false)}>
                            <img src={close}/>
                       </button>
                    </div>
                    <ul className="mobileMenuList">
                        <li className="borderBottom">
                             <div className="mobileMenuItem "> 
                                 {faqs.map((faq, index) => {
                                        return (
                                                <MobileMenuAccardion key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                                )
                                        })
                                   }
                             </div>
                        </li>   
                        <a href="##" className="buyNowMobile">Buy now</a>      
                    </ul>
              </div>
        </div>
    )
}