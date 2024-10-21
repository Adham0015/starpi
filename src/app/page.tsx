import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { Button } from "@/components/ui/button";

const fetchHomePage = async () => {
  const req = await fetch("http://localhost:1337/api/home-page?populate=*");
  const res = await req.json();
  console.log("res", res);
  return res.data;
};
export default async function Home() {
  const post = await fetchHomePage();
  const { title, description, blocks } = post || {};
  const heroSection = blocks?.find(
    (block: any) => block.__component === "layout.hero-section"
  );

  const heading = heroSection?.heading || ""; // Safely access heading
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      {/* <BlocksRenderer content={content1} /> */}
      <h1 className="text-5xl">{title}</h1>
      <p className="text-3xl">{description}</p>
      <p className="text-3xl">{heading}</p>
      <Button variant="outline">Button</Button>
    </div>
  );
}
