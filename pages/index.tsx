import React, { useCallback, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";
import { useCheckout } from "@/mock-backend";
import CreateBG from "@/public/images/create-bg.webp";

// components
import {
  CreateAppWrapper,
  CreateBanner,
  CreateLogo,
  CreateStoreContainer,
  CreateCard,
  CreateCardBanner,
  CreateCardDetail,
  CreateCardName,
  CreateCardPrice,
  CreateCardInventory,
  CreateButton,
  CreateOverlay,
} from "@/components/app";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const { items, buy } = useCheckout();

  const handleBuy = useCallback(
    (itemId: number) => {
      setLoading(true);
      const toastId = toast.loading("Puchasing...");
      buy(itemId)
        .then(() => {
          setLoading(false);
          toast.dismiss(toastId);
          toast.success("Done", {
            duration: 1000,
          });
        })
        .catch((error) => {
          setLoading(false);
          toast.dismiss(toastId);
          toast.error(error.message, {
            duration: 1000,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [buy]
  );

  return (
    <CreateAppWrapper>
      <Toaster />
      <CreateBanner>
        <Image src={CreateBG} alt="create" />
        <CreateLogo>Create Inc, Store</CreateLogo>
      </CreateBanner>

      <CreateStoreContainer>
        {loading && <CreateOverlay />}
        {items.map((item, index) => (
          <CreateCard key={index}>
            <CreateCardBanner>{item.name[0].toUpperCase()}</CreateCardBanner>
            <CreateCardDetail>
              <CreateCardName>Product: {item.name}</CreateCardName>
              <CreateCardPrice>Price: ${item.price}</CreateCardPrice>
              <CreateCardInventory>
                Inventory: {item.inventory}
              </CreateCardInventory>
              <CreateButton onClick={() => handleBuy(item.id)}>
                Buy
              </CreateButton>
            </CreateCardDetail>
          </CreateCard>
        ))}
      </CreateStoreContainer>
    </CreateAppWrapper>
  );
};

export default Index;
