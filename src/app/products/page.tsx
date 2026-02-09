"use client";

import { useMemo, useState } from "react";
import Card from "@/src/components/card/Card";
import Navbar from "@/src/components/navigation/Navbar";
import Pagination from "@/src/components/pagination/Pagination";
import AdvancedSelect from "@/src/components/advancedSelect/AdvancedSelect";
import { rawgEndpoints } from "@/src/services/api/endpoints";
import { useGet } from "@/src/services/api/useApi";
import type { GamesResponse } from "@/src/types/products";
import type { SelectOption } from "@/src/components/advancedSelect/types";

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const [selectedGames, setSelectedGames] = useState<SelectOption[]>([]);

  const params = useMemo(
    () => ({
      key: process.env.NEXT_PUBLIC_RAWG_KEY,
      page,
      page_size: pageSize,
    }),
    [page],
  );

  const { data, isLoading, isFetching } = useGet<GamesResponse>({
    url: rawgEndpoints.games,
    source: "rawg",
    params,
  });

  const totalPages = data?.count
    ? Math.max(1, Math.ceil(data.count / pageSize))
    : 1;

  const gameOptions = useMemo<SelectOption[]>(
    () =>
      data?.results?.map((game) => ({
        id: String(game.id),
        label: game.name,
      })) ?? [],
    [data?.results],
  );

  const selectedGameIds = useMemo(
    () => new Set(selectedGames.map((option) => option.id)),
    [selectedGames],
  );

  const visibleGames = (() => {
    if (!data?.results) return [];
    if (selectedGames.length === 0) return data.results;
    return data.results.filter((game) => selectedGameIds.has(String(game.id)));
  })();

  return (
    <>
      <Navbar />
      <div className="p-10 pb-0">
        <AdvancedSelect
          groups={[{ label: "Games", options: gameOptions }]}
          value={selectedGames}
          onChange={setSelectedGames}
          placeholder="Search and select games"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 p-10">
        {isLoading && (
          <div className="col-span-full text-center text-text-white">
            Loading...
          </div>
        )}
        {visibleGames
          ?.filter((game) => !!game.background_image)
          .map((game) => {
            const year = game.released
              ? new Date(game.released).getFullYear()
              : null;
            const platforms = game.platforms
              ?.map((p) => p.platform.name)
              .join(", ");
            return (
              <Card
                key={game.id}
                img={game.background_image ?? ""}
                title={game.name}
                ring={game.rating.toFixed(1)}
                year={year}
                ageRating={game.esrb_rating?.name ?? "N/A"}
                platforms={platforms}
              />
            );
          })}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        isFetching={isFetching}
        onPageChange={setPage}
      />
    </>
  );
};

export default ProductsPage;
