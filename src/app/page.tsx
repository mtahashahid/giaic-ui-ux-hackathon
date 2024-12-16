import Hero from '../components/Hero/Hero'
import Editor from '../components/Editors/Editors'
import Products from '../components/Products/Products'
import Banner1 from '../components/misc/banner'
import Banner from '../components/misc/banner1'
import FeaturedPosts from '../components/Featured/featured'
export default function Home() {
  return (
    <div>
   {/* <Hero/> */}
   <Editor/>
   <Products/>
   <Banner1/>
   <Banner/>
   <FeaturedPosts/>
    </div>
  );
}
