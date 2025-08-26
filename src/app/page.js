// app/page.js
"use client";

import { useState, useEffect } from "react";
import "./style.css";
import CardBrand from "../components/CardBrand/CardBrand";

export default function Home() {
  const [brands, setBrands] = useState(null);
  const [brandSort, setBrandSort] = useState("curated");

  useEffect(() => {
    fetch(
      "https://bpcghheadless.wpenginepowered.com/wp-json/cgh/work/?total=-1"
    )
      .then((res) => res.json())
      .then(setBrands);
  }, []);

  console.log(brands);

  if (!brands) return <p>Loading…</p>;

  let sortedBrands = [...brands];
  if (brandSort === "curated") {
    sortedBrands = [...brands];
  } else if (brandSort === "newest") {
    sortedBrands.sort((a, b) => b.date - a.date);
  } else if (brandSort === "az") {
    sortedBrands.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <>
      <div className="container">
        <ul className="brand__filter flex gap-4 my-8">
          <li>
            <button
              className={brandSort === "curated" ? "active" : ""}
              onClick={() => setBrandSort("curated")}
            >
              Curated
            </button>
          </li>
          <li>
            <button
              className={brandSort === "newest" ? "active" : ""}
              onClick={() => setBrandSort("newest")}
            >
              Newest
            </button>
          </li>
          <li>
            <button
              className={brandSort === "az" ? "active" : ""}
              onClick={() => setBrandSort("az")}
            >
              A-Z
            </button>
          </li>
        </ul>

        <div className="brand__wrapper my-8">
          {sortedBrands.map((item) => (
            <CardBrand item={item} key={`${item.slug}-${item.date}`} />
          ))}
        </div>
      </div>
    </>
  );
}
