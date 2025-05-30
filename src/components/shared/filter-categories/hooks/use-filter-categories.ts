import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useFilterCategories = (categoriesSet?: Set<string>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = [...(categoriesSet || [])];

  const onCategoryItemClick = (index: number) => {
    const category = categories[index];
    setActiveIndex(index);

    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    setSearchParams(params);
  };

  useEffect(() => {
    const currentCategory = searchParams.get("category");

    if (currentCategory) {
      const index = categories.findIndex(
        (category) => category === currentCategory
      );

      if (index !== -1) setActiveIndex(index);
    } else {
      setActiveIndex(0);
    }
  }, [searchParams, categories]);

  return {
    categories,
    activeIndex,
    onCategoryItemClick,
  };
};
