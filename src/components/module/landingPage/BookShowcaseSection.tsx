import { Card, CardContent } from "@/components/ui/card";

const bookImages = [
  "https://i.ibb.co/sdF5H6T3/image-6.png",
  "https://i.ibb.co/Y79z6sG6/image-7.png",
  "https://i.ibb.co/S7VjqNWq/image-8.png",
  "https://i.ibb.co/5XXfgT2X/image-9.png",
  "https://i.ibb.co/1JKBQWxL/image-10.png",
  "https://i.ibb.co/1YYHmwrg/image-11.png",
  "https://i.ibb.co/8RJwLKc/image-12.png",
  "https://i.ibb.co/R4STNjYf/image-13.png",
];

export const  BookShowcaseSection = () => {
  return (
    <section className=" p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Some Awesome Images of Books
        </h2>
        <p className="mt-2 text-muted-foreground text-lg max-w-2xl mx-auto">
          A visual glimpse into our rich and diverse collection of books. Handpicked just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bookImages.map((img, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent>
              <img
                src={img}
                alt={`Book ${index + 1}`}
                className="w-full h-auto rounded-xl object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
