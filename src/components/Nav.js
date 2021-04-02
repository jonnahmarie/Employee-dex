import React from 'react';

function Nav({onSearch, sortDept}) {
    return (
        <div>
            <form>
                <input 
                    value={searchTerm}
                    onChange={onSearch}
                    type="text"
                    placeholder="Search By Employee"
                />
            </form>
            <div>
                <button onClick={sortDept}>By Department</button>
            </div>
        </div>
    );
}