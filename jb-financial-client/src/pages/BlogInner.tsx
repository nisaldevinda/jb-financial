import BlogFeaturedSection from "../components/sections/blog/BlogFeaturedSection";

const BlogInner: React.FC = () => {
  return (
    <>
      <div className="h-[72px]"></div>
      <BlogFeaturedSection
        imageSrc="/images/blog/sample-blog-1.jpg"
        category="Finance"
        readingTime="3 Min"
        title="The Power of Compound Interest"
        description="Discover how compound interest can help grow your wealth over time."
        buttonText="Read More"
      />
      <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-4 md:gap-16">
        <h3 className="zodiak-r text-2xl md:text-5xl text-neutral-mid">
          Heading One
        </h3>
        <p className="bodyText text-neutral-mid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          deleniti aperiam aut iure necessitatibus laudantium, quae quibusdam,
          pariatur, sapiente aliquid saepe quod perspiciatis corrupti maiores
          doloremque tenetur? Quae, accusamus. Deserunt possimus, nesciunt
          recusandae rerum esse numquam ad? Odit ad dolorum autem provident
          voluptas perspiciatis architecto voluptatibus a, totam, reiciendis
          consequuntur.
        </p>
        <img src="/images/other/blog-item.jpg" alt="" />
        <h3 className="zodiak-r text-2xl md:text-5xl text-neutral-mid">
          Heading Two
        </h3>
        <p className="bodyText text-neutral-mid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet earum
          dolorum assumenda omnis aliquid, voluptatum perferendis eaque eum
          numquam suscipit doloremque aspernatur voluptas labore soluta nam
          ducimus ipsum excepturi at vel officia? Doloremque eligendi beatae, ea
          deserunt amet, delectus recusandae dolorem autem nulla eos iusto sit!
          Eveniet, necessitatibus explicabo assumenda adipisci odio unde numquam
          aut doloribus, ducimus placeat ad voluptates ea nulla! Porro voluptate
          sequi, dolorum beatae quis et nemo nulla perspiciatis libero enim sed
          inventore accusamus cupiditate minima tempore nam totam omnis odit
          ullam expedita provident quod harum, amet cum? Laborum illo maxime ut
          facere sed perferendis? Officiis.
        </p>
        <h3 className="zodiak-r text-2xl md:text-5xl text-neutral-mid">
          Heading Three
        </h3>
        <p className="bodyText text-neutral-mid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          deleniti aperiam aut iure necessitatibus laudantium, quae quibusdam,
          pariatur, sapiente aliquid saepe quod perspiciatis corrupti maiores
          doloremque tenetur? Quae, accusamus. Deserunt possimus, nesciunt
          recusandae rerum esse numquam ad? Odit ad dolorum autem provident
          voluptas perspiciatis architecto voluptatibus a, totam, reiciendis
          consequuntur.
        </p>
        <h3 className="zodiak-r text-2xl md:text-5xl text-neutral-mid">
          Heading Four
        </h3>
        <p className="bodyText text-neutral-mid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet earum
          dolorum assumenda omnis aliquid, voluptatum perferendis eaque eum
          numquam suscipit doloremque aspernatur voluptas labore soluta nam
          ducimus ipsum excepturi at vel officia? Doloremque eligendi beatae, ea
          deserunt amet, delectus recusandae dolorem autem nulla eos iusto sit!
          Eveniet, necessitatibus explicabo assumenda adipisci odio unde numquam
          aut doloribus, ducimus placeat ad voluptates ea nulla! Porro voluptate
          sequi, dolorum beatae quis et nemo nulla perspiciatis libero enim sed
          inventore accusamus cupiditate minima tempore nam totam omnis odit
          ullam expedita provident quod harum, amet cum? Laborum illo maxime ut
          facere sed perferendis? Officiis.
        </p>
      </section>
    </>
  );
};

export default BlogInner;
