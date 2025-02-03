import { Link } from "react-router-dom";
import { Post } from "../Posts"; // Posts.tsxからPost型をインポート
//型定義
type ArticlesCardProps = {
  post: Post;
  className?: string; //classNameは省略可能に設定
};

export const ArticlesCard: React.FC<ArticlesCardProps> = ({
  post,
  className,
}) => {
  // 日付表示を変更（YYYY/MM/DD形式）
  const date = new Date(post.createdAt).toLocaleDateString("ja-JP");
  return (
    <Link
      to={`/posts/${post.id}`} //クリックするとid毎の詳細ページに飛ぶ
      className={`block border border-gray-400 my-8 mx-auto py-4 pl-6 pr-20 w-[800px] max-w-[800px] ${className} `}
    >
      <div className="text-sm float-left">{date}</div>
      <div className="float-right">
        {post.categories.map((category, index) => (
          <button
            key={index}
            className="px-2 py-0 mx-1 text-blue-500 border border-blue-500  rounded"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="clear-both text-left pt-4">{post.title}</div>
      <div
        className="pt-4 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </Link>
  );
};
