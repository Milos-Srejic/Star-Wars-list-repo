window.onload = () => {
  const getData = async () => {
    try {
      let response = await fetch('../src/movies.json');
      let data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  getData()
    .then((data) => {
      data.movies.forEach((movie) => {
        const title = movie.title;

        const image_url = `../public/images/${title}.jpg`;
        const likes = Math.floor(Math.random() * 100);

        const movie_card = document.createElement('div');
        const movie_title = document.createElement('h3');
        const movie_image = document.createElement('img');
        const movie_footer = document.createElement('span');
        const movie_likes = document.createElement('span');
        const like_btn = document.createElement('span');

        like_btn.classList.add('like');
        movie_card.classList.add('movie');
        movie_likes.classList.add('numberOfLikes');
        movie_footer.classList.add('movie_footer');

        movie_title.textContent = title;
        movie_image.src = image_url;
        movie_likes.textContent = 'Likes: ' + likes;
        like_btn.textContent = 'Like ❤️';

        movie_footer.appendChild(like_btn);
        movie_footer.appendChild(movie_likes);
        movie_card.appendChild(movie_title);
        movie_card.appendChild(movie_image);
        movie_card.appendChild(movie_footer);

        document.getElementById('movies').appendChild(movie_card);
      });
    })
    .catch((error) => {
      console.error(error);
    });

  const movie_list = document.getElementById('movies');
  movie_list.addEventListener('click', function (e) {
    if (e.target.className === 'like') {
      const oldNumber = Number(e.target.nextSibling.textContent.slice(6, 100));
      const newNumber = oldNumber + 1;
      e.target.nextSibling.textContent = 'Likes: ' + newNumber;
    }
  });
};
