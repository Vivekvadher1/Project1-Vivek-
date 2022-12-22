// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function App() {
//   const [post, setPost] = React.useState();

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }


import useAxios from 'axios-hooks'

 export default function App() {
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    'https://reqres.in/api/users/1'
  )

  const [
    { data: putData, loading: putLoading, error: putError },
    executePut
  ] = useAxios(
    {
      url: 'https://reqres.in/api/users/1',
      method: 'POST'
    },
    { manual: true }
  )
  

  if (getLoading || putLoading) return <p>Loading...</p>
  if (getError || putError) return <p>Error!</p>

  return (
    <div>
      <button onClick={executePut}>update data</button>
      <pre>{JSON.stringify(putData || getData, null, 2)}</pre>
    </div>
  )
}