import React from "react";

const FooterCard = (props: any) => {
  const FooterData = props.FooterData;
  return (
    <div className="Footer-Card-Main">
      <p className="text-lg font-semibold leading-5 tracking-wider text-left">
        {FooterData.title}
      </p>
      <ul>
        <li className="list-none text-lg font-normal leading-[19px] text-left text-black text-opacity-60 my-4">
          {FooterData.about}
        </li>
        <li className="list-none text-lg font-normal leading-[19px] text-left text-black text-opacity-60 my-4">
          {FooterData.feature}
        </li>
        <li className="list-none text-lg font-normal leading-[19px] text-left text-black text-opacity-60 my-4">
          {FooterData.work}
        </li>
        <li className="list-none text-lg font-normal leading-[19px] text-left text-black text-opacity-60 my-4">
          {FooterData.career}
        </li>
      </ul>
    </div>
  );
};

export default FooterCard;
