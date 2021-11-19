import Link from "next/Link";
import React from "react";

const index = ({ data }) => {
   return (
      <div>
         <h1>This is Users Page</h1>
         <h3>Users Available: {data.length}</h3>
         {data.map((user, index) => (
            <div key={index}>
               <p>{user.name}</p>
               <p>{user.email}</p>
               <Link href={`users/${user.id}`}>
                  <button>explore</button>
               </Link>
            </div>
         ))}
      </div>
   );
};

export default index;

export async function getStaticProps() {
   const url = `https://jsonplaceholder.typicode.com/users`;
   const res = await fetch(url);
   const data = await res.json();
   return {
      props: { data }, // will be passed to the page component as props
   };
}
