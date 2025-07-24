// function Food(props) {
// console.log(props);
function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  },
  {
    id: 2,
    name: "bulgogi",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2024/09/05/23a1a45982d33638566887ec2c3ecc611.jpg",
  },
  {
    id: 3,
    name: "kimbap",
    image:
      "https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202505/30/tenbody/20250530160002770fyuk.png",
  },
  {
    id: 4,
    name: "samgyetang",
    image:
      "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  },
];

function renderFood(dish) {
  console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image} />;
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
