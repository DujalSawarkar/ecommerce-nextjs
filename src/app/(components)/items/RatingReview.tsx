import React from "react";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import Comment from "../Comments";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const Data2 = [
  {
    id: 1,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 2,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 3,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 4,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 5,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
  {
    id: 6,
    rayte: 4,
    name: "Sarah M.",
    discription:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 17, 2023",
  },
];
const RatingReview = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center h-28 p-8">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-black">All Reviews</h2>
          <p className="ml-2 text-base text-gray-600 mt-1">(451)</p>
        </div>
        <div className="flex items-center gap-4">
          <Button className="flex justify-center items-center h-10 w-12 rounded-full  bg-gray-200 text-black hover:text-white hover:bg-black">
            <HiOutlineAdjustmentsVertical className="text-xl" />
          </Button>
          {/* <Button className="flex items-center justify-between bg-gray-200  text-black hover:text-white hover:bg-black">
            Latest <RiArrowDownSLine className="ml-2" />
          </Button> */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-200  text-black hover:text-white hover:bg-black"
              >
                Add Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Your Review</DialogTitle>
                {/* <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription> */}
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="your name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Comment
                  </Label>
                  <Textarea
                    id="username"
                    placeholder="Type your message here."
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-gray-200  text-black hover:text-white hover:bg-black"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {Data2.map((e: any, index) => (
          <Comment data={e} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RatingReview;
