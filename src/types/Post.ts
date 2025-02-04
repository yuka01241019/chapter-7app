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