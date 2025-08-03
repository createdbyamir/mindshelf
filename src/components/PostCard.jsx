import { Link } from "react-router-dom";

function PostCard({ imageSrc, imageAlt, title, abstract, date, slug }) {
  return (
    <Link to={`/post/${slug}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-700 mb-3">{abstract}</p>
              <div className="text-sm text-gray-500 flex justify-between">
                <span>{date}</span>
                <span>By CreatedByAmir</span>
              </div>
            </div>
          </div>
    </Link>
  );
}

export default PostCard;
