import Link from "next/link";
import s from "./page.module.css";
import MealsGrid from "../components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className={s.header}>
        <h1>
          Delicious meals, created <span className={s.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={s.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={s.main}>{<MealsGrid meals={meals} />}</main>
    </>
  );
}
