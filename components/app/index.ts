import styled from "styled-components";

export const CreateAppWrapper = styled.div.attrs({
  className: "max-w-7xl mx-auto flex flex-col gap-5 pb-10",
})``;

export const CreateBanner = styled.div.attrs({
  className: "relative",
})``;

export const CreateLogo = styled.div.attrs({
  className: "absolute top-5 right-5 text-white font-bold text-2xl italic",
})``;

export const CreateStoreContainer = styled.div.attrs({
  className: "grid grid-cols-4 gap-3",
})``;

export const CreateCard = styled.div.attrs({
  className: "flex flex-col bg-gray-100 rounded divide-y",
})``;

export const CreateCardBanner = styled.div.attrs({
  className: "flex w-full justify-center h-32 items-center text-5xl",
})``;

export const CreateCardDetail = styled.div.attrs({
  className: "flex flex-col gap-3 p-3",
})``;

export const CreateCardName = styled.span.attrs({
  className: "text-xl",
})``;

export const CreateCardPrice = styled.span.attrs({
  className: "text-md font-bold",
})``;

export const CreateCardInventory = styled.span.attrs({
  className: "",
})``;

export const CreateButton = styled.button.attrs({
  className:
    "flex h-10 px-5 w-full justify-center items-center bg-teal-500 hover:bg-teal-600 text-white font-bold rounded",
})``;

export const CreateOverlay = styled.div.attrs({
  className: "fixed top-0 left-0 w-full h-full z-10 bg-black/20",
})``;
