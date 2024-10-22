import { ShuffleMemberForm } from "@/app/form/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "入力フォーム",
  description: "Playwrightハンズオンの第2のステップ",
};

export default function Form() {
  return (
    <main>
      <h1>入力フォーム</h1>
      <ShuffleMemberForm />
    </main>
  );
}
