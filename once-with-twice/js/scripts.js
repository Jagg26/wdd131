document.querySelector('#joinForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const fav = document.querySelector('#favorite').value;
  localStorage.setItem('fanData', JSON.stringify({ name, fav }));
  document.querySelector('#message').textContent = `Thanks for joining, ${name}! 💖`;
});

// Example albums array
const albums = [
  { title: "Eyes Wide Open", year: 2020 },
  { title: "Formula of Love", year: 2021 }
];

const albumsContainer = document.querySelector('#albums');
if (albumsContainer) {
  albums.forEach(album => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${album.title}</h3><p>Released: ${album.year}</p>`;
    albumsContainer.appendChild(div);
  });
}
