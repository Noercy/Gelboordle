
import { GELBOORU_URL } from '$env/static/private';

export async function getGelbooruData() {
  //const response = await fetch(`https://gelbooru.com/index.php?page=dapi&s=post&q=index&limit=1&pid=1&id=9367941&json=1${GELBOORU_URL}`);
  const response = await fetch(`https://gelbooru.com/index.php?page=dapi&s=post&q=index&limit=1&json=1&tags=sort:random+rating:s${GELBOORU_URL}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}