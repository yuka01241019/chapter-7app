import { useEffect, useState } from "react";
import { ArticlesCard } from "./pages/ArticlesCard";

//記事一覧データの型定義
//他で利用するときはexportする
export type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};
//APIデータを確認して定義//APIレスポンス全体の型
type ApiResponse = {
  message: string;
  posts: Post[]; // 投稿記事の配列
};
//型定義(コンポ―ネント)
export const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // postsの型を指定
  const [isLoading, setIsLoading] = useState<boolean>(true); // isLoadingの型を指定
  // API呼び出しを行う関数
  useEffect(() => {
    const getApi = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data: ApiResponse = await res.json();// レスポンスの型を指定
      console.log(data); 
      setPosts(data.posts); 
      setIsLoading(false); 
    };
    getApi();
  }, []);
  //ローディング中
  if (isLoading) {
    return <div>読み込み中…</div>;
  }
  // 記事一覧データのAPIデータがない場合
  if (posts.length === 0) {
    return <div>記事一覧はありません</div>;
  }
  return (
    <div>
      {posts.map((post) => (
        <ArticlesCard key={post.id} post={post} />// 投稿データをArticlesCardに渡す
      ))}
    </div>
  );
};
