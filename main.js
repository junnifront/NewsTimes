const API_KEY=`ea9e3222412340b794c8f0e70e1677e0`;
let news = [];
const getLatestNews = async ()=> {
    const url = new URL(
        `https://newstimes-jiyoon.netlify.app/top-headlines?country=kr`
    );
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("dddd", data.articles);
};

getLatestNews();