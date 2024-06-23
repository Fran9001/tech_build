import CarouselClient from './CarouselClient'; // Ajusta la ruta según tu estructura de carpetas

const fetchItems = async () => {
  const res = await fetch("https://mercado-libre4.p.rapidapi.com/search?country=AR&search=celulares", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': "d6e6855dcamshc0a9a0baf1edc0fp174196jsnb9de0d5725d7",
      'X-RapidAPI-Host': "mercado-libre4.p.rapidapi.com",
    }
  });
  const data = await res.json();
  return data.results.filter((item) => item.price.amount > 800000).slice(0, 15);
};

const Carousel = async ({ title }) => {
  const initialItems = await fetchItems();
  return <CarouselClient initialItems={initialItems} title={title} />;
};

export default Carousel;
