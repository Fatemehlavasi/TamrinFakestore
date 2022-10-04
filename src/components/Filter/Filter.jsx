import React from 'react';
import "../Filter/Filter.style.css"
const filterData = [
    { id: 1, title: 'allData' },
    { id: 2, title: 'favoriteData' },
    { id: 3, title: 'unfavoriteData' },
]
const Filter = ({setFilter}) => {
    const handleFilterBtn = title => {
        setFilter(title)
    }
    return (
        <div className='Filter'>
        <div className='filter-lable'>
            filter:
        </div>
        <div className='Filter-user'>
            {filterData.map(filterBtn => (
                <p>
                    <input  name='title' type={'radio'} onClick={() => handleFilterBtn(filterBtn.title)} className='filter-input'/>
                    {filterBtn.title}
                </p>
                
            ))}
        </div>

    </div>
    );
};

export default Filter;