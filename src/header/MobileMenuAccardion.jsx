import { useState, useRef } from "react"
import downSlaq from "../img/chevron-down.png"

export default function MobileMenuAccardion ({ handleToggle, active, faq }) {
    const contentEl = useRef();
    const { header, id, text } = faq;

    return (
        <div className="menuListItemBlock m-top">
            <div className="menuListItemBlockHeader">
                <div className={`menuToggle  ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
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
                <div className=" menuListItemBlockBody">
                    {
                      text.map(item => {
                        return <a href="##" className="mobileMenuListItem" >{item}</a>
                      })
                    }
                </div>
            </div>
        </div>
    )
}