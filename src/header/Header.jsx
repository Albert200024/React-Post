import { useState, useRef } from "react"
import "./css/header.css"
import "./css/headerMedia.css"
import searchIqon from "../img/search.png"
import logo from "../img/logo.png"
import downSlaq from "../img/chevron-down.png"
import mobileMenuBtn from "../img/mobileMenuBtn.png"
import close from "../img/close.png"
import { A } from "@angular/cdk/keycodes"


const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className="menuListItemBlock">
            <div className="menuListItemBlockHeader">
                <div className={`accardionToggle menuToggle  ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="menuItemTitle">{header}</h5>
                    <div className="menuItemIqon">
                        <img src={downSlaq} alt="" />
                    </div>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{text}</p>

                    {
                      text.map(item => {
                        return <a>{item}</a>
                      })
                       
                    }
                </div>
            </div>
        </div>
    )
}

export default function Header(){
    const [bool, setBool] = useState(false)
    const [active, setActive] = useState(null);
    const faqs = [
        {
            id: 1,
            header: "1",
            text: ["1", "2", "3"]
        },
        {
            id: 2,
            header: "Where does it come from?",
            text: ["1", "2", "3"]
        },
        {
            id: 3,
            header: "Why do we use it?",
            text: ["1", "2", "3"]
        },
        {
            id: 4,
            header: "Where can I get some?",
            text: ["1", "2", "3"]
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
                             <div className="accardion"> 
                                 {faqs.map((faq, index) => {
                                        return (
                                                <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                                )
                                        })
                                   }
                             </div>
                        </li>
                        
                    </ul>
              </div>







              
        </div>
    )
}