import React, { FC, ReactNode } from "react";
import Text from "../atoms/Text";
import { AiFillStar } from "react-icons/ai";
import UserProfile from "../atoms/UserProfile";
interface ReviewProps {
  review: string;
  profileImage: string;
  username: string;
  role: string;
  star: "One" | "Three" | "Five";
}
const ReviewCard: FC<ReviewProps> = ({
  star,
  review,
  profileImage,
  username,
  role,
}) => {
  const getStar = (): ReactNode => {
    switch (star) {
      case "Five":
        return (
          <div className="w-full flex h-fit space-x-2">
            <div className="bg-yellowstar text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-yellowstar text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-yellowstar text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-yellowstar text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-yellowstar text-white p-1 rounded">
              <AiFillStar />
            </div>
          </div>
        );
      case "Three":
        return (
          <div className="w-full flex h-fit space-x-2">
            <div className="bg-yellowstar text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-yellowstar text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-yellowstar text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-graylight text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-graylight text-white p-1 rounded">
              <AiFillStar />
            </div>
          </div>
        );
      case "One":
        return (
          <div className="w-full flex h-fit space-x-2">
            <div className="bg-yellowstar text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-graylight text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-graylight text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-graylight text-white p-1 rounded">
              <AiFillStar />
            </div>
            <div className="bg-graylight text-white p-1 rounded">
              <AiFillStar />
            </div>
          </div>
        );
    }
  };
  return (
    <div className="w-full bg-white px-6 py-8 rounded-lg h-fit space-y-6">
      {getStar()}
      <Text textStyle="Review" textColor="JustDark" value={review} />
      <UserProfile 
        username={username}
        role={role}
        profileImage={profileImage}
      />
    </div>
  );
};

export default ReviewCard;
export type {ReviewProps}