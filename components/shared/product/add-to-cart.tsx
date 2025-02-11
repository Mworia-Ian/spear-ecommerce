"use client";

import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const { toast } = useToast();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    // handle failure
    if (!res.success) {
      toast({
        variant: "destructive",
        description: res.message,
      });
      return;
    }
    //handle success add to cart
    if (res.success) {
      toast({
        description: `${item.name} added to cart`,
        action: (
          <ToastAction
            className="bg-green-700 text-white hover:bg-gray-800"
            altText="Got to Cart"
            onClick={() => router.push("/cart")}
          >
            Got to Cart
          </ToastAction>
        ),
      });
    }
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus /> Add to Cart
    </Button>
  );
};

export default AddToCart;
