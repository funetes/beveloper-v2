import Link from 'next/link';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

type post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const IndexPage = () => {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (!data) return <>loading...</>;
  const posts: post[] = data;

  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      {posts.map((post: post) => (
        <h1>{post.body}</h1>
      ))}
    </>
  );
};

export default IndexPage;
