import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { MdCloudUpload } from "react-icons/md";
import JoditEditor from 'jodit-react'
import Gallery from '../components/Gallery';
import { base_url } from '../../config/config'
import axios from 'axios'
import storeContext from '../../context/storeContext'
import toast from 'react-hot-toast'

const CreateNews = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Add News</h2>
        <Link
          className="px-3 py-1.5 bg-purple-500 rounded-sm text-white hover:bg-purple-600"
          to="/dashboard/news"
        >
          News
        </Link>
      </div>

      <div className="p-4">
        <form onSubmit={added}>
          <div className="flex flex-col gap-y-2 mb-6">
            <label
              className="text-md font-medium text-gray-600"
              htmlFor="title"
            >
              Title
            </label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="title"
              name="title"
              className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              id="title"
            />
          </div>
          <div className="mb-6">
            <div>
              <label
                htmlFor="img"
                className={`w-full h-60 flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}
              >
                {img ? (
                  <img src={img} className="w-full h-full" alt="image" />
                ) : (
                  <div className="flex justify-center items-center flex-col gap-y-2">
                    <span className="text-2xl">
                      <MdCloudUpload />
                    </span>
                    <span>Select Image</span>
                  </div>
                )}
              </label>
              <input
                required
                onChange={imageHandle}
                className="hidden"
                type="file"
                id="img"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mb-6">
            <div className="flex justify-start items-center gap-x-2">
              <h2>Description</h2>
              <div onClick={() => setShow(true)}>
                <span className="text-2xl cursor-pointer">
                  <MdCloudUpload />
                </span>
              </div>
            </div>
            <div>
              <JoditEditor
                ref={editor}
                value={description}
                tabIndex={1}
                onBlur={(value) => setDescription(value)}
                onChange={() => {}}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              disabled={loader}
              className="px-3 py-1.5 bg-purple-500 rounded-sm text-white hover:bg-purple-600"
            >
              {" "}
              {loader ? "loading..." : "Add News"}
            </button>
          </div>
        </form>
      </div>
      <input
        onChange={imageHandler}
        type="file"
        multiple
        id="images"
        className="hidden"
      />
      {show && <Gallery setShow={setShow} images={images} />}
    </div>
  );
};

export default CreateNews;
