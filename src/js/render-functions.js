export const renderImages = images => {
  return images.map(image =>
    `<li class='gallery-item'>
      <a href=${image.largeImageURL}>
        <img alt=${image.tags} src=${image.webformatURL} class='gallery-image'/>
      </a>
      <ul class='list'>
        <li class='item-info'>
          <p class='list-title'>Likes</p>
          <p class='list-count'>${image.likes}</p>
        </li>
        <li class='list-item'>
          <p class='list-title'>Views</p>
          <p class='list-count'>${image.views}</p>
        </li>
        <li class='list-item'>
          <p class='list-title'>Comments</p>
          <p class='list-count'>${image.comments}</p>
        </li>
        <li class='list-item'>
          <p class='list-title'>Downloads</p>
          <p class='list-count'>${image.downloads}</p>
        </li>
      </ul>
    </li>
  `).join('');
};