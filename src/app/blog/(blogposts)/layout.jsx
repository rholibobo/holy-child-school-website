import Footer from "../../components/Footer/footer";
import BlogHero from "../../components/blogHero/blogHero";

export default function Posts({ children }) {
  return (
    <section>
      <div>
        <BlogHero />
      </div>
      {children}
      <Footer />
    </section>
  );
}
