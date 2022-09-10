import React from 'react'
import './Selection.css'

function Selection() {
  return (
   <>
   <div className="selection__container">
    <div className="left__selection">
        <div className="size">
        <p>Filter By</p>
        <select name="selecr" id="select1">
            <option selected disabled> Size</option>
            <option >Small</option>
            <option >Medium</option>
            <option >Large</option>
        </select>
        </div>
        <div className="color">
            <p>Selected By</p>
            <select name="select" id="select2">
                <option selected disabled>Brands</option>
                <option>Nike</option>
                <option>Gucchi</option>
                <option>US Polo</option>
                <option> Levies</option>
                <option>Peater Englend</option>
            </select>
        </div>

    </div>

    <div className="right__selection">
        <div className="timing">
            <p>Short By</p>
            <select name="select" id="select3">
                <option > Newest(first)</option>
                <option > Oldest(first)</option>
                <option > Price(acc)</option>
                <option > Price(dec)</option>
            </select>
        </div>
    </div>
   </div>
   
   </>
  )
}

export default Selection
