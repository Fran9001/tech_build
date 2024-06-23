import PhonesClient from './PhonesClient';

const fetchPhones = async (offset) => {
  const res = await fetch(
    `https://mercado-libre4.p.rapidapi.com/search?country=AR&search=smartphones&offset=${offset}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "d6e6855dcamshc0a9a0baf1edc0fp174196jsnb9de0d5725d7",
        "X-RapidAPI-Host": "mercado-libre4.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();
  return data.results.slice(0, 12);
};

const PhonesPage = async () => {
  const initialPhones = await fetchPhones(0);
  return <PhonesClient initialPhones={initialPhones} />;
};

export default PhonesPage;
