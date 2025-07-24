import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "bulgogi",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2024/09/05/23a1a45982d33638566887ec2c3ecc611.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "kimbap",
    image:
      "https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202505/30/tenbody/20250530160002770fyuk.png",
    rating: 4.0,
  },
  {
    id: 4,
    name: "samgyetang",
    image:
      "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.8,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

function renderFood(dish) {
  console.log(dish);
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number, // number | undefined
};

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
