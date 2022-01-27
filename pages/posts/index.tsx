import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface IPostListProps {
  posts: any[];
}

export default function PostList({ posts }: IPostListProps) {
  return (
    <div>
      <div>Post List Page</div>
      <ul>
        {posts.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<IPostListProps> = async (context: GetStaticPropsContext) => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  return {
    props: {
      posts: data.data.map((item: any) => ({ id: item.id, title: item.title })),
    },
  };
};
