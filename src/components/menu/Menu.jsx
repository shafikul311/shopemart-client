import React from 'react'

function Menu () {
  return (
    <section className='border-y border-gray-400'>
      <ul className='flex menu menu-horizontal bg-base-100 rounded-box p-2'>
        <li tabIndex={0} className='m-3 text-1xl font-bold'>
          Trending Categories
          <ul className='menu bg-base-100 w-56'>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a className='active'>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
          {/* <ul>
            <li>tab1</li>
            <li>tab2</li>
          </ul> */}
        </li>
        <li className='m-3 text-1xl font-bold'>Home</li>
        <li className='m-3 text-1xl font-bold'>Shop</li>
        <li className='m-3 text-1xl font-bold'>categories</li>
        <li className='m-3 text-1xl font-bold'>Shope</li>
        <li className='m-3 text-1xl font-bold'>Blog</li>
        <li className='m-3 text-1xl font-bold'>Contact</li>
        <li className='m-3 text-1xl font-bold'>Helpline</li>
      </ul>
    </section>
    // <div className='border-y border-grey-100'>
    //   <ul className='menu menu-horizontal bg-base-100 rounded-box p-2'>
    //     <li tabIndex={0}>
    //       <span>Browse All Categories</span>
    //       <ul className='rounded-box bg-base-100 p-2'>
    //         <li>
    //           <div className='flex'>
    //             <span>Level 2</span>
    //             <span>Level 2</span>
    //           </div>
    //           <ul>
    //             <li>
    //               <span>Level 3</span>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>
    //     <li>
    //       <a>Item</a>
    //     </li>
    //     <li>
    //       <a>Item</a>
    //     </li>
    //     <li>
    //       <a>Item</a>
    //     </li>
    //     <li>
    //       <a>Item</a>
    //     </li>
    //     <li>
    //       <a>Item</a>
    //     </li>
    //     <li>
    //       <a>Item</a>
    //     </li>
    //   </ul>
    // </div>
  )
}

export default Menu
