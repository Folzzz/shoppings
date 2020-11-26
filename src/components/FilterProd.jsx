// import React, {useState} from 'react'
// import './filterprod.css'

// const FilterProd = ({ category, filterProducts, searchPrice }) => {
//     const [sort, setSort] = useState('')

//     // const sortProducts = (event) => {
//     //     //implement
//     //     setSort(event.target.value)
//     //     console.log(sort); 
//     //   }

//     const onChange =(e) => {
//         filterProducts(e.target.value)
//     }

//     return (
//         <div className="filter">
//             <div className="filter-sort">
//                 Order {''}
//                 <select value={sort} onChange={e => setSort(e.target.value) }>
//                     <option value="">All</option>
//                     <option value="lowest">Lowest</option>
//                     <option value="highest">Highest</option>
//                 </select>
//             </div>
//             <div className="filter-cat">
//                 Filter {''}
//                 <select value={category} onChange={onChange}>
//                     <option value="">All</option>
//                     <option value="men clothing">Men Clothing</option>
//                     <option value="jewelry">Jewelry</option>
//                     <option value="electronics">Electronics</option>
//                     <option value="women clothing">Women Clothing</option>
//                 </select>
//             </div>
//         </div>
//     )
// }

// export default FilterProd
