// import React, { useState, useEffect } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import UserAvatar from './UserAvatar';



// const User = ({ user, selectUser }) => {

//   const { loading, error, data } = useQuery(GET_USER, {
//     variables: { id: 1 }
//   });

  
//   if (loading) return 'Loading...';
//   if (error) return `Error ${error.message}`;

//   return (
//     <React.Fragment>
//       <button
//         style={{ padding: "20px" }}
//        >
//         Request Query
//       </button>
     

//     </React.Fragment>
//   );
// }

// export default User;
