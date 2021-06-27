import React from 'react'

export default function header({value, setValue}) {


    function currMonthName(){
        return value.format("MMMM")

    }

    function currYear(){
        return value.format("YYYY")

    }

    function prevMonth(){
        return value.clone().subtract(1, "month");
    }
    function nextMonth(){
        return value.clone().add(1, "month");
    }
    //had lfonction dart bach nmarckiw lch'her li 7na fih
    // bach nt7kmou fih w matkounch 3adna possibilité ndouzou lch'her li 9bel mn li 7na fih

    function thisMonth(){
        return value.isSame(new Date(), "month");

    }

    return (
        <div className="header">
            {/* 1ere div */}
            <div
                className="previous" onClick={() => !thisMonth() && setValue(prevMonth())}
            >
                {!thisMonth() ? String.fromCharCode(171) : null} </div>


            {/* 2eme div */}
            <div className="current">
                {currMonthName()}{" "}{currYear()}
            </div>



            {/* 3eme div */}
            <div className="next" onClick={() => setValue(nextMonth())}
            >{String.fromCharCode(187)}</div>

            {/* div de header */}
        </div>
    )
}