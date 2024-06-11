import './App.css';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 3,
      }
  },
};
const posts = [
  {id: 1, url: 'images/blog-details-2.jpg'},
  {id: 2, url: 'images/blog-details-3.jpg'},
  {id: 2, url: 'images/blog-details-4.jpg'},
  {id: 2, url: 'images/blog-details-2.jpg'},
  {id: 2, url: 'images/blog-details-3.jpg'}
];

function App() {
  return (
    <div className="App">
     
     <OwlCarousel className="owl-theme owl-carousel" loop margin={10} {...options}>
        

        {posts.map((post) =>
      <div>
        <img src={post.url} alt='' />
          
      </div>
      )}

      </OwlCarousel>
    
    </div>
  );
}

export default App;
