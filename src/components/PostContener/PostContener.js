import React, { useState, useEffect } from 'react';
import { StyledPostContener } from './PostContener.styles';
import PostBox from 'components/PostBox/PostBox';
import axios from 'axios';

export const query = `
{
  allNews{
  	id,
    title,
    text1,
    text2,
    image{
      url,
    }
}
}
      `;

function PostContener() {
  const [articles, setArticles] = useState([]);
  // const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        console.log(data.allNews)
        setArticles(data.allNews)
      })
      .catch((err) => {
        console.log(err)
        // setError(`Sorry, we couldn't load articles for you`);
      });
  }, []);

  return (
    <StyledPostContener>
      <h1>Artykuły</h1>

      {articles.length > 0? articles.map(({ id, title, info, text1, text2, image }) => (
        <PostBox  title={title} info={info} key={id} text1={text1} text2={text2} color='#D0CCD0' img={image}/>
      )):<PostBox>Loading...</PostBox>}
    </StyledPostContener>
  );
}

export default PostContener;
