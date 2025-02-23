import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticlesCardDetail } from "./ArticlesCardDetail";
import { Post } from "../types/Post";

//型定義(コンポ―ネント)
export const PageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); //URLパラメータをオブジェクトで返す
  const [post, setPost] = useState<Post | null>(null); //データ取得前はnull、取得後はPost型どちらかを取る
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchPageDetail = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data: { post: Post } = await res.json();
      console.log(data);
      setPost(data.post);
      setIsLoading(false);
    };
    fetchPageDetail();
  }, [id]);
  //ローディング中の処理
  if (isLoading) {
    return <div>読み込み中…</div>;
  }
  // postが見つからなかった場合の処理
  if (!post) {
    return <div>記事はありません</div>;
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <img alt={post.title} className="mt-12" src={post.thumbnailUrl} />
      </div>
      <ArticlesCardDetail post={post} className="border-none" />
    </div>
  );
};
