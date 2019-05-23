import React, { useState } from 'react'

const INITIAL_LIST = [
    {
      id: '0',
      title: 'React with RxJS for State Management Tutorial',
      url:
        'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
    },
    {
      id: '1',
      title: 'A complete React with Apollo and GraphQL Tutorial',
      url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
    },
  ];
  
 const DelArray = () => {
   const [list, setList] = useState(INITIAL_LIST)
  const deleteHandler = id => {
      const del = list.filter(listy=>listy.id !==id)
      setList(del)
   }

    return (
      <div>
        {/* <input type='text'/><button type= 'button'>Add</button> */}
          <ul>
            {list.map(listItem => (
              <li key ={listItem.id}>
              <button onClick = {()=>deleteHandler(listItem.id)}>delete Link</button>
                  <a href ={listItem.url}> {listItem.title}</a>
                </li>
              
            ))}
            
          </ul>
      </div>
    )}
  

export default DelArray
