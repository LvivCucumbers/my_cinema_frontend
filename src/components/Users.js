import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import UserAvatar from './UserAvatar';

const GET_USERS = gql`
  {
    users {
      email
     
      
    }
  }
`;

function Users({ selectUser }) {
  
  const { loading, error, data } = useQuery(GET_USERS,{

  });

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;


  return(
    <div className="flex flex-wrap items-center pb-16">
      {data.users.map(user => (
        <div key={user.email} className="lg:w-1/3 w-full p-4 text-center inline" onClick={selectUser(this, user)}>
          <UserAvatar user={user} />
         
        </div>
      ))}

     
    </div>
  )
}

export default Users;