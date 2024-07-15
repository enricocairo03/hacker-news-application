const newsList = document.getElementById("news-list");
const loadMoreButton = document.getElementById("load-more");
let newsIds = [];
let currentIndex = 0;
const pageSize = 10;

document.addEventListener("DOMContentLoaded", async () => {
  await fetchNewsIds();
  await loadNews();
});

loadMoreButton.addEventListener("click", loadNews);

async function fetchNewsIds() {
  try {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    newsIds = response.data;
  } catch (error) {
    console.error("Errore nel recupero degli ID delle news:", error);
  }
}

async function loadNews() {
  const endIndex = currentIndex + pageSize;
  const newsToLoad = newsIds.slice(currentIndex, endIndex);
  const newsPromises = newsToLoad.map((id) => fetchNewsDetails(id));
  const newsDetails = await Promise.all(newsPromises);

  newsDetails.forEach((news) => {
    if (news) {
      const newsItem = document.createElement("li");
      const newsLink = document.createElement("a");
      newsLink.href = news.url;
      newsLink.textContent = news.title;
      newsLink.target = "_blank";

      const newsDate = document.createElement("p");
      newsDate.textContent = new Date(news.time * 1000).toLocaleString();

      newsItem.appendChild(newsLink);
      newsItem.appendChild(newsDate);
      newsList.appendChild(newsItem);
    }
  });

  currentIndex = endIndex;
  if (currentIndex >= newsIds.length) {
    loadMoreButton.style.display = "none";
  }
}

async function fetchNewsDetails(id) {
  try {
    const response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Errore nel recupero dei dettagli della news con ID ${id}:`,
      error
    );
    return null;
  }
}
