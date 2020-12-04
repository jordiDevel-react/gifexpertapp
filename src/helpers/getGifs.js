const getGifs = async (category) => {
  if (!category) {
    throw new Error(`Category can't be null`);
  }

  const giphyKey = 'rVqyoTpTg7QyFqWpneENlXIYy5oUJlVN';
  const limit = 10;
  const filter = encodeURI(category);

  const url = `https://api.giphy.com/v1/gifs/search?q=${filter}&limit=${limit}&api_key=${giphyKey}`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

export default getGifs;
