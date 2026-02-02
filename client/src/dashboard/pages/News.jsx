import React from "react";
import { Link } from "react-router-dom";
import NewContent from "../components/NewContent";
import storeContext from "../../context/storeContext";

const News = () => {

    const { store } = useContext(storeContext);
    
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">News</h2>
        {store.userInfo && store.userInfo.role !== "admin" && (
          <Link
            className="px-3 py-1.5 bg-green-500 rounded-sm text-white hover:bg-green-600"
            to="/dashboard/news/create"
          >
            Create News
          </Link>
        )}
      </div>
      <NewContent />
    </div>
  );
};

export default News;
