import { Article } from "../types/article";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="border-t-[1px] border-[rgba(0, 0, 0, 0.1)] py-6 w-full">
      <div className="font-light mb-4 w-full">
        <a href={""} className="inline-block">
          <img
            src={article.author.image}
            alt="df"
            className="h-8 w-8 rounded-full"
          />
        </a>
        <div className="ml-1 inline-block">
          <a href="" className="font-medium text-green ">
            {article.author.username}
          </a>
          <span className="text-xs text-[#bbb] block">{article.createdAt}</span>
        </div>
        <button className="border border-green font-medium rounded text-green py-1 px-2 text-sm hover:bg-green hover:text-white relative right-0">
          하트
        </button>
      </div>
    </div>
  );
};
export default ArticleCard;
