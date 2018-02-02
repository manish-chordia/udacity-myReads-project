import React from 'react'
import MyReads from "./MyReads";
import {Link} from "react-router-dom";

const Main = ({books, onUpdate}) => (
    <div>
        <MyReads books={books} onUpdate={onUpdate}/>
        <div className='open-search'>
            <Link to={'/search'}/>
        </div>
    </div>
);

export default Main